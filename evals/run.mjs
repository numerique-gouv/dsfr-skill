#!/usr/bin/env node

import { spawn } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { check, summarize } from '../skills/dsfr-skill/scripts/verifier.mjs'
import { openBrowser, render } from './navigateur.mjs'

const evalsRoot = dirname(fileURLToPath(import.meta.url))
const skillRoot = join(evalsRoot, '..', 'skills', 'dsfr-skill')
const projectSkillDirectories = ['.claude/skills', '.agents/skills']
const answerFormat = '\n\nRéponds uniquement avec le code HTML, dans un seul bloc ```html. Il sera servi seul, sans aucun autre fichier à côté.'
const timeout = Number(process.env.EVAL_TIMEOUT_MS) || 15 * 60 * 1000
const dsfrVersion = readFileSync(join(skillRoot, 'VERSION.md'), 'utf8').match(/@gouvfr\/dsfr@([\d.]+)/)[1]

const { values: options } = parseArgs({
  options: {
    agent: { type: 'string' },
    sorties: { type: 'string', default: join(evalsRoot, 'sorties') },
    cas: { type: 'string' },
    'avec-skill': { type: 'boolean', default: false },
    navigateur: { type: 'boolean', default: false },
    parallele: { type: 'string', default: '3' }
  }
})

function selectedCases () {
  const cases = JSON.parse(readFileSync(join(evalsRoot, 'cas.json'), 'utf8'))
  if (!options.cas) return cases

  const wanted = options.cas.split(',').map((id) => id.trim()).filter(Boolean)
  const unknown = wanted.filter((id) => !cases.some((testCase) => testCase.id === id))
  if (wanted.length === 0 || unknown.length > 0) throw new Error(`cas inconnus : ${unknown.join(', ') || '(aucun)'}`)
  return cases.filter((testCase) => wanted.includes(testCase.id))
}

function concurrency () {
  const size = Number(options.parallele)
  if (!Number.isInteger(size) || size < 1) throw new Error(`--parallele attend un entier positif, reçu « ${options.parallele} »`)
  return size
}

const runningGroups = new Set()

function killGroup (pid) {
  try {
    process.kill(-pid, 'SIGKILL')
  } catch {}
}

process.on('exit', () => {
  for (const pid of runningGroups) killGroup(pid)
})

for (const [signal, code] of [['SIGINT', 130], ['SIGTERM', 143]]) process.on(signal, () => process.exit(code))

function runAgent (testCase) {
  const workDirectory = mkdtempSync(join(tmpdir(), `dsfr-eval-${testCase.id}-`))

  if (options['avec-skill']) {
    for (const directory of projectSkillDirectories) cpSync(skillRoot, join(workDirectory, directory, 'dsfr-skill'), { recursive: true })
  }

  return new Promise((resolvePromise, reject) => {
    const child = spawn(options.agent, { shell: true, detached: true, cwd: workDirectory, stdio: ['pipe', 'pipe', 'inherit'] })
    runningGroups.add(child.pid)
    let timedOut = false
    const timer = setTimeout(() => {
      timedOut = true
      killGroup(child.pid)
      reject(new Error(`l'agent a dépassé ${Math.round(timeout / 1000)} s sur ${testCase.id}`))
    }, timeout)
    let output = ''

    child.stdout.on('data', (chunk) => { output += chunk })
    child.on('error', reject)
    child.on('exit', () => killGroup(child.pid))
    child.on('close', (code) => {
      clearTimeout(timer)
      runningGroups.delete(child.pid)
      if (timedOut) return
      if (code === 0) resolvePromise(output)
      else reject(new Error(`l'agent a échoué sur ${testCase.id} (code ${code})`))
    })
    child.stdin.end(`${testCase.prompt}${answerFormat}`)
  })
}

function officialExampleClasses () {
  const examples = readdirSync(skillRoot, { recursive: true })
    .filter((path) => /(^|\/)exemples(\.md$|\/)/.test(path))
    .map((path) => readFileSync(join(skillRoot, path), 'utf8'))
  return new Set(examples.flatMap((text) => [...text.matchAll(/class="([^"]*)"/g)].flatMap((match) => match[1].split(/\s+/))))
}

function extractHtml (answer) {
  return answer.match(/```html\s*\n([\s\S]*?)```/)?.[1] ?? answer
}

function missingClasses (required, classes) {
  return required
    .map((entry) => [entry].flat())
    .filter((alternatives) => !alternatives.some((name) => classes.has(name)))
    .map((alternatives) => alternatives.join(' ou '))
}

function missingAttributes (required = {}, elements) {
  return Object.entries(required).flatMap(([tag, attributes]) => {
    const element = elements.find((candidate) => candidate.tag === tag)
    return Object.entries(attributes)
      .filter(([name, value]) => element?.attributes[name] !== value)
      .map(([name, value]) => `<${tag} ${name}="${value}"> attendu`)
  })
}

function evaluate (testCase, html, exampleClasses) {
  const findings = check(html)
  const { classes, tags, elements } = summarize(html)
  const tolerated = (finding) => finding.className && exampleClasses.has(finding.className)
  const format = (finding) => `ligne ${finding.line} : ${finding.message}`
  const problems = [
    ...findings.filter((finding) => !tolerated(finding)).map(format),
    ...missingClasses(testCase.classesRequises, classes).map((name) => `classe attendue absente : ${name}`),
    ...(testCase.classesInterdites || []).filter((name) => classes.has(name)).map((name) => `classe interdite présente : ${name}`),
    ...missingAttributes(testCase.attributsRequis, elements)
  ]

  if (testCase.pageComplete && !tags.has('html')) problems.push('page complète attendue, fragment reçu')

  return { id: testCase.id, problems, warnings: findings.filter(tolerated).map(format) }
}

async function inPool (items, size, task) {
  const results = []
  const queue = [...items.entries()]
  const worker = async () => {
    for (let next = queue.shift(); next; next = queue.shift()) results[next[0]] = await task(next[1])
  }
  await Promise.all(Array.from({ length: size }, worker))
  return results
}

async function main () {
  const outputDirectory = resolve(options.sorties)
  mkdirSync(outputDirectory, { recursive: true })
  const exampleClasses = officialExampleClasses()
  const browser = options.navigateur ? await openBrowser() : null

  const results = await inPool(selectedCases(), concurrency(), async (testCase) => {
    const file = join(outputDirectory, `${testCase.id}.html`)

    if (options.agent) writeFileSync(file, extractHtml(await runAgent(testCase)))
    if (!existsSync(file)) return { id: testCase.id, problems: [`pas de sortie ${file} (lancer avec --agent)`], warnings: [] }

    const html = readFileSync(file, 'utf8')
    const result = evaluate(testCase, html, exampleClasses)
    if (browser) result.problems.push(...(await render(browser, html, { pageComplete: testCase.pageComplete, version: dsfrVersion })).map((problem) => `navigateur : ${problem}`))
    return result
  })

  await browser?.close()

  for (const result of results) {
    console.log(`${result.problems.length === 0 ? 'OK   ' : 'ÉCHEC'} ${result.id}`)
    for (const problem of result.problems) console.log(`      ${problem}`)
    for (const warning of result.warnings) console.log(`    ~ ${warning}`)
  }

  const passed = results.filter((result) => result.problems.length === 0).length
  const warnings = results.reduce((total, result) => total + result.warnings.length, 0)
  console.log(`\n${passed}/${results.length} cas réussis, ${warnings} avertissements`)
  process.exit(passed === results.length ? 0 : 1)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(2)
})
