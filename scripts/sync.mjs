#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, posix, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { headingAnchors, markdownLinks } from './markdown-anchors.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const skillRoot = join(repositoryRoot, 'skills', 'dsfr-skill')
const generatedDirectories = ['composants', 'fondamentaux', 'modeles', 'reference']
let outputRoot = skillRoot
const largeSnippetSize = 4000

const subPages = [
  { source: 'index.md', target: 'index.md', label: 'Présentation' },
  { source: 'design/index.md', target: 'design.md', label: 'Design' },
  { source: 'code/index.md', target: 'code.md', label: 'Code' },
  { source: 'accessibility/index.md', target: 'accessibilite.md', label: 'Accessibilité' }
]

const foundationSubPages = {
  'color/usage/index.md': 'usage.md'
}

function main () {
  const version = process.argv[2] || latestVersion()
  const packageRoot = downloadPackage(version)

  try {
    const documentation = join(packageRoot, 'src', 'dsfr')
    const examples = join(packageRoot, 'example')
    const pathMap = new Map()
    const topics = [
      ...componentTopics(documentation, examples),
      ...foundationTopics(documentation, examples),
      ...patternTopics(documentation, examples, 'page', 'pages'),
      ...patternTopics(documentation, examples, 'pattern', 'blocs')
    ]

    for (const topic of topics) {
      for (const page of topic.pages) pathMap.set(page.source, join(skillRoot, page.target))
    }

    outputRoot = join(dirname(packageRoot), 'skill')

    for (const topic of topics) writeTopic(topic, pathMap, version)

    writeReference(packageRoot, version)
    writeTemplates(topics, version)
    writeVersion(topics, version)
    removeDeadAnchors()
    installOutput()

    console.log(`DSFR ${version} : ${topics.length} sujets générés`)
  } finally {
    rmSync(dirname(packageRoot), { recursive: true, force: true })
  }
}

function removeDeadAnchors () {
  const markdownFiles = readdirSync(outputRoot, { recursive: true }).filter((path) => path.endsWith('.md')).map((path) => join(outputRoot, path))
  const anchorsOf = new Map()
  const anchorsFor = (file) => {
    if (!anchorsOf.has(file)) anchorsOf.set(file, headingAnchors(readFileSync(file, 'utf8')))
    return anchorsOf.get(file)
  }

  const looseForm = (anchor) => anchor.normalize('NFD').replace(/[^a-z0-9]/gi, '').toLowerCase()

  for (const file of markdownFiles) {
    let content = readFileSync(file, 'utf8')
    const replacements = markdownLinks(content).flatMap((link) => {
      if (/^(https?:|mailto:)/.test(link.target) || !link.target.includes('#')) return []
      const [path, anchor] = link.target.split('#')
      const targetFile = path ? resolve(dirname(file), decodeURIComponent(path)) : file
      if (!targetFile.endsWith('.md') || !existsSync(targetFile)) return []

      const anchors = anchorsFor(targetFile)
      if (anchors.has(decodeURIComponent(anchor))) return []

      const equivalent = [...anchors].find((candidate) => looseForm(candidate) === looseForm(decodeURIComponent(anchor)))
      if (equivalent) return [{ ...link, replacement: `[${link.text}](${path}#${equivalent})` }]
      return [{ ...link, replacement: path ? `[${link.text}](${path})` : link.text }]
    })

    for (const link of replacements.reverse()) {
      content = content.slice(0, link.index) + link.replacement + content.slice(link.index + link.length)
    }

    if (replacements.length > 0) writeFileSync(file, content)
  }
}

function installOutput () {
  for (const directory of generatedDirectories) rmSync(join(skillRoot, directory), { recursive: true, force: true })
  cpSync(outputRoot, skillRoot, { recursive: true })
}

function latestVersion () {
  return execFileSync('npm', ['view', '@gouvfr/dsfr', 'version'], { encoding: 'utf8' }).trim()
}

function downloadPackage (version) {
  const workDirectory = mkdtempSync(join(tmpdir(), 'dsfr-sync-'))
  execFileSync('npm', ['pack', `@gouvfr/dsfr@${version}`, '--silent', '--pack-destination', workDirectory], { stdio: ['ignore', 'ignore', 'inherit'] })
  const archive = readdirSync(workDirectory).find((name) => name.endsWith('.tgz'))
  execFileSync('tar', ['xzf', join(workDirectory, archive), '-C', workDirectory])
  return join(workDirectory, 'package')
}

function componentTopics (documentation, examples) {
  const componentsRoot = join(documentation, 'component')

  return readdirSync(componentsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(componentsRoot, entry.name, '_part', 'doc', 'index.md')))
    .map((entry) => {
      const docRoot = join(componentsRoot, entry.name, '_part', 'doc')
      const target = posix.join('composants', entry.name)

      return {
        kind: 'composant',
        name: entry.name,
        directory: target,
        frontmatter: parseFrontmatter(readFileSync(join(docRoot, 'index.md'), 'utf8')),
        pages: subPages
          .filter((page) => existsSync(join(docRoot, page.source)))
          .map((page) => ({ ...page, source: join(docRoot, page.source), target: posix.join(target, page.target) })),
        exampleFiles: existingFiles([join(examples, 'component', entry.name, 'index.html')])
      }
    })
}

function foundationTopics (documentation, examples) {
  const docRoot = join(documentation, 'core', '_part', 'doc')

  return readdirSync(docRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(docRoot, entry.name, 'index.md')))
    .map((entry) => {
      const target = posix.join('fondamentaux', entry.name)
      const extraPages = Object.entries(foundationSubPages)
        .filter(([source]) => source.startsWith(`${entry.name}/`))
        .map(([source, page]) => ({ source: join(docRoot, source), target: posix.join(target, page), label: page }))

      return {
        kind: 'fondamental',
        name: entry.name,
        directory: target,
        frontmatter: parseFrontmatter(readFileSync(join(docRoot, entry.name, 'index.md'), 'utf8')),
        pages: [{ source: join(docRoot, entry.name, 'index.md'), target: posix.join(target, 'index.md'), label: 'Présentation' }, ...extraPages],
        exampleFiles: existingFiles([join(examples, 'core', entry.name, 'index.html')])
      }
    })
}

function patternTopics (documentation, examples, family, targetFamily) {
  const docRoot = join(documentation, 'layout', family)
  const exampleRoot = join(examples, 'layout', family)
  const names = new Set([
    ...subdirectories(docRoot).filter((name) => existsSync(join(docRoot, name, '_part', 'doc', 'index.md'))),
    ...subdirectories(exampleRoot)
  ])

  return [...names].sort().map((name) => {
    const source = join(docRoot, name, '_part', 'doc', 'index.md')
    const target = posix.join('modeles', targetFamily, name)
    const hasDoc = existsSync(source)
    const exampleFiles = htmlFilesUnder(join(exampleRoot, name))

    return {
      kind: targetFamily === 'pages' ? 'page' : 'bloc',
      name,
      directory: target,
      frontmatter: hasDoc ? parseFrontmatter(readFileSync(source, 'utf8')) : { title: exampleTitle(exampleFiles[0]) || name },
      pages: hasDoc ? [{ source, target: posix.join(target, 'index.md'), label: 'Présentation' }] : [],
      exampleFiles
    }
  })
}

function exampleTitle (file) {
  if (!file) return null
  return decodeEntities(readFileSync(file, 'utf8').match(/<title>([^<]*?)(?: - Système de design)?<\/title>/)?.[1] || '') || null
}

function subdirectories (directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isDirectory() && entry.name !== '_part').map((entry) => entry.name)
}

function htmlFilesUnder (directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { recursive: true })
    .filter((path) => path.endsWith('index.html'))
    .map((path) => join(directory, path))
    .sort()
}

function existingFiles (paths) {
  return paths.filter((path) => existsSync(path))
}

function parseFrontmatter (markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return {}

  return Object.fromEntries(
    match[1].split('\n')
      .map((line) => line.match(/^([a-zA-Z]+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key, value.replace(/^['"]|['"]$/g, '').trim()])
  )
}

function writeTopic (topic, pathMap, version) {
  const largeSnippets = []
  const examples = topic.exampleFiles.flatMap((file) => extractExamples(file, topic.exampleFiles.length > 1 ? variantName(file) : null, largeSnippets))
  const title = topic.frontmatter.title || topic.name

  for (const page of topic.pages) {
    const markdown = readFileSync(page.source, 'utf8')
    const isPresentation = page.target.endsWith('index.md')
    const heading = isPresentation ? `# ${title}` : `# ${title} : ${page.label.replace(/\.md$/, '')}`
    const intro = isPresentation && topic.frontmatter.shortDescription ? `\n\n> ${topic.frontmatter.shortDescription}` : ''
    const body = convertMarkdown(markdown, { source: page.source, target: join(skillRoot, page.target), pathMap, keepIntro: isPresentation })
    const siblings = isPresentation ? siblingIndex(topic, page, examples.length > 0) : ''

    writeOutput(page.target, `${heading}${intro}\n\n${siblings}${body}`)
  }

  if (examples.length === 0) return

  for (const snippet of largeSnippets) writeOutput(posix.join(topic.directory, snippet.path), snippet.code)

  const content = [
    `# ${title} : exemples officiels`,
    `Extraits de code des pages d'exemple du DSFR ${version}. Les \`id\` sont à rendre uniques dans la page qui les reprend. Les extraits de plus de ${largeSnippetSize / 1000} ko sont dans des fichiers à part.`,
    ...examples
  ].join('\n\n')

  writeOutput(posix.join(topic.directory, 'exemples.md'), content)
}

function siblingIndex (topic, presentation, hasExamples) {
  const others = topic.pages.filter((page) => page !== presentation).map((page) => `[${page.label.replace(/\.md$/, '')}](${posix.basename(page.target)})`)
  if (hasExamples) others.push('[Exemples](exemples.md)')
  return others.length > 0 ? `Voir aussi : ${others.join(' · ')}\n\n` : ''
}

function variantName (file) {
  return dirname(file).split('/').slice(-1)[0]
}

function writeOutput (relativePath, content) {
  const path = join(outputRoot, relativePath)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${content.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim()}\n`)
}

function convertMarkdown (markdown, context) {
  const lines = markdown.replace(/^---\n[\s\S]*?\n---\n/, '').split('\n')
  const output = []
  let inFence = false
  let skipDepth = null
  let introEnd = 0
  let pendingCaption = null
  const flushCaption = (keep = false) => {
    if (keep && pendingCaption !== null) output.push(pendingCaption)
    pendingCaption = null
  }

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      if (!inFence) flushCaption(true)
      inFence = !inFence
      if (skipDepth === null) output.push(line.replace(/^(\s*```)HTML\b/, '$1html'))
      continue
    }

    if (inFence) {
      if (skipDepth === null) output.push(line)
      continue
    }

    const directive = line.trim().match(/^(:{2,})([a-zA-Z-]*)(?:\[((?:[^[\]]|\[[^\]]*\])*)\])?(?:\{(.*)\})?\s*$/)

    if (skipDepth !== null) {
      if (directive && !directive[2] && directive[1].length === skipDepth) skipDepth = null
      continue
    }

    if (directive) {
      const [, colons, name, label, attributes] = directive
      flushCaption(Boolean(name) && name !== 'dsfr-doc-guideline')

      if (name === 'dsfr-doc-tab-navigation') {
        introEnd = output.length
        skipDepth = colons.length
        continue
      }

      if (name === 'dsfr-doc-guideline') {
        pendingCaption = `**${label || 'Recommandation'}** :`
        continue
      }

      const converted = convertDirective(name, label, attributes)
      if (converted !== null) output.push(converted)
      continue
    }

    const converted = convertLine(line, context)

    if (pendingCaption !== null && converted.trim() !== '') {
      if (/^\s*([-*|#>]|\d+\.)/.test(converted)) flushCaption(true)
      else {
        output.push(`${pendingCaption} ${converted.trim()}`)
        pendingCaption = null
        continue
      }
    }

    if (pendingCaption === null || converted.trim() !== '') output.push(converted)
  }

  flushCaption()

  const content = context.keepIntro ? removeLeadingTitle(output) : output.slice(introEnd)
  return shiftHeadings(content)
}

function convertDirective (name, label, attributes = '') {
  if (!name) return ''

  switch (name) {
    case 'dsfr-doc-pin': {
      const details = []
      if (/required=(true|"true"|'true')/.test(attributes)) details.push('obligatoire')
      const addition = attributes.match(/add=(?:'([^']*)'|"([^"]*)"|‘([^’]*)’)/)
      if (addition) details.push(addition[1] || addition[2] || addition[3])
      return `- ${label}${details.length > 0 ? ` (${details.join(', ')})` : ''}`
    }
    case 'fr-table':
    case 'fr-accordion':
      return label ? `**${label}**\n` : ''
    case 'fr-button':
      return label ? `- Bouton « ${label.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')} »${attributes ? ` (${attributes})` : ''}` : ''
    default:
      return ''
  }
}

function convertLine (line, context) {
  return line
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/(?<!!)\[([^\]]+)\]\(([^)\s]+)\)/g, (match, text, href) => convertLink(text, href, context))
}

function convertLink (text, href, context) {
  if (/^(https?:|mailto:|#)/.test(href)) return `[${text}](${href})`

  if (href.startsWith('path:/getting-started/developer/')) return `[${text}](${relative(dirname(context.target), join(skillRoot, 'demarrage.md'))})`
  if (href.startsWith('path:/')) return text

  const [path, anchor] = href.split('#')
  const absolute = resolve(dirname(context.source), path)
  const mapped = context.pathMap.get(absolute)

  if (!mapped) return text

  const relativePath = relative(dirname(context.target), mapped) || posix.basename(mapped)
  return `[${text}](${relativePath}${anchor ? `#${anchor}` : ''})`
}

function removeLeadingTitle (lines) {
  const firstHeading = lines.findIndex((line) => /^#{1,2} /.test(line))
  if (firstHeading === -1) return lines
  return [...lines.slice(0, firstHeading), ...lines.slice(firstHeading + 1)]
}

function shiftHeadings (lines) {
  let inFence = false

  return lines.map((line) => {
    if (/^\s*```/.test(line)) inFence = !inFence
    if (inFence) return line
    return line.replace(/^###(#*) /, '##$1 ')
  }).join('\n')
}

function extractExamples (file, variant, largeSnippets) {
  const html = readFileSync(file, 'utf8')
  const body = html.slice(html.indexOf('<body'))
  const snippetPattern = /<section class="fr-accordion">\s*<h3 class="fr-accordion__title">\s*<button[^>]*aria-controls="snippet-\d+"[^>]*>[^<]*<\/button>\s*<\/h3>\s*<div class="fr-collapse" id="snippet-\d+">\s*<pre([^>]*)><code>([\s\S]*?)<\/code><\/pre>/g
  const sections = []
  const codeSections = []
  let previousEnd = 0
  let group = null

  for (const match of body.matchAll(snippetPattern)) {
    const code = decodeEntities(match[2]).trimEnd()
    const language = match[1].match(/language-([\w-]+)/)?.[1] || 'html'
    const zone = body.slice(previousEnd, match.index)
    const { groupHeading, title, titleEnd } = exampleHeadings(zone)
    const codeText = cleanText(code)
    const notes = [...zone.slice(previousEnd === 0 ? titleEnd : 0).matchAll(/<p>([\s\S]*?)<\/p>/g)].map((paragraph) => cleanText(paragraph[1])).filter((note) => note && !codeText.includes(note) && !/^(Retour|Lorem ipsum)/i.test(note))

    if (groupHeading && groupHeading !== group) {
      group = groupHeading
      sections.push(`## ${group}`)
    }

    sections.push(`### ${title}`)
    if (notes.length > 0) sections.push(notes.join('\n\n'))

    const codeSection = code.length > largeSnippetSize ? largeSnippetLink(variant, title, code, language, largeSnippets) : `\`\`\`${language}\n${code}\n\`\`\``
    codeSections.push(codeSection)
    sections.push(codeSection)

    previousEnd = match.index + match[0].length
  }

  if (sections.length === 0) return []
  if (!variant) return sections
  if (codeSections.length === 1) return [`## Variante ${variant}`, codeSections[0]]
  return [`## Variante ${variant}`, ...sections.map((section) => section.replace(/^(#{2,3}) /, '#$1 '))]
}

function largeSnippetLink (variant, title, code, language, largeSnippets) {
  const path = posix.join('exemples', `${[variant, slugify(title)].filter(Boolean).join('-')}-${largeSnippets.length + 1}.${language}`)
  largeSnippets.push({ path, code })
  return `Extrait complet : [${path}](${path}) (${Math.round(code.length / 1000)} ko)`
}

function exampleHeadings (zone) {
  const headings = [...zone.matchAll(/<h([2-6])((?: class="fr-h\d[^"]*")?)>([\s\S]*?)<\/h\1>/g)]
    .map((heading) => ({ level: Number(heading[1]), bare: !heading[2], text: cleanText(heading[3]), end: heading.index + heading[0].length }))
    .filter((heading) => heading.text)
  const groupHeading = headings.length > 1 && headings[0].bare && headings[0].level === 2 ? headings[0].text : null
  const rest = groupHeading ? headings.slice(1) : headings
  const bare = rest.filter((heading) => heading.bare)

  if (bare.length > 0) {
    const topLevel = Math.min(...bare.map((heading) => heading.level))
    const title = bare.filter((heading) => heading.level === topLevel).at(-1)
    return { groupHeading, title: title.text, titleEnd: title.end }
  }

  const styled = rest[0]
  return { groupHeading, title: styled?.text || groupHeading || 'Exemple', titleEnd: styled?.end || zone.length }
}

function slugify (text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50)
}

function cleanText (html) {
  return decodeEntities(html.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()
}

function decodeEntities (text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (match, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
}

function writeReference (packageRoot, version) {
  const dist = join(packageRoot, 'dist')
  const cssFiles = [join(dist, 'dsfr.css'), join(dist, 'utility', 'utility.css')]
  const classes = new Set(cssFiles.flatMap((file) => [...readFileSync(file, 'utf8').matchAll(/\.(fr-(?:[a-zA-Z0-9_-]|\\@)+)/g)].map((match) => match[1].replace('\\@', '@'))))

  writeOutput('reference/classes.txt', [...classes].sort().join('\n'))

  const iconsRoot = join(dist, 'utility', 'icons')
  const iconSections = subdirectories(iconsRoot).sort().map((category) => {
    const css = readFileSync(join(iconsRoot, category, `${category}.css`), 'utf8')
    const icons = [...new Set([...css.matchAll(/\.(fr-icon-[a-z0-9-]+)/g)].map((match) => match[1]))].sort()
    return `## ${category.replace(/^icons-/, '')}\n\n${icons.join('\n')}`
  })

  writeOutput('reference/icones.md', [
    `# Icônes DSFR ${version}`,
    'Classes `fr-icon-*` disponibles via `utility/utility.min.css` (ou `utility/icons/icons.min.css`). Toute autre classe `fr-icon-*` est inventée.',
    ...iconSections
  ].join('\n\n'))

  const pictogramsRoot = join(dist, 'artwork', 'pictograms')
  const pictogramSections = subdirectories(pictogramsRoot).sort().map((category) => {
    const files = readdirSync(join(pictogramsRoot, category)).filter((name) => name.endsWith('.svg')).sort()
    return `## ${category}\n\n${files.map((name) => `artwork/pictograms/${category}/${name}`).join('\n')}`
  })

  writeOutput('reference/pictogrammes.md', [
    `# Pictogrammes DSFR ${version}`,
    `Chemins relatifs à \`dist/\` (CDN : \`https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@${version}/dist/\`). Usage et balisage : [fondamentaux/pictogram](../fondamentaux/pictogram/index.md).`,
    ...pictogramSections
  ].join('\n\n'))
}

function topicLine (topic) {
  const title = topic.frontmatter.title || topic.name
  const summary = topic.frontmatter.shortDescription || topic.frontmatter.description || ''
  const entry = topic.pages.length > 0 ? `${topic.directory}/index.md` : `${topic.directory}/exemples.md`
  const designOnly = topic.kind === 'composant' && !topic.pages.some((page) => page.target.endsWith('code.md'))
  return `- \`${topic.name}\` [${title}](${entry})${summary ? ` : ${summary}` : ''}${designOnly ? ' *(sans code)*' : ''}`
}

function writeTemplates (topics, version) {
  const templates = join(repositoryRoot, 'ressources')
  const listFor = (kind) => topics.filter((topic) => topic.kind === kind).map(topicLine).join('\n')
  const countFor = (kind) => String(topics.filter((topic) => topic.kind === kind).length)

  for (const name of readdirSync(templates).filter((file) => file.endsWith('.template.md'))) {
    const content = readFileSync(join(templates, name), 'utf8')
      .replaceAll('{{VERSION}}', version)
      .replaceAll('{{NOMBRE_COMPOSANTS}}', countFor('composant'))
      .replace('{{COMPOSANTS}}', listFor('composant'))
      .replace('{{FONDAMENTAUX}}', listFor('fondamental'))
      .replace('{{PAGES}}', listFor('page'))
      .replace('{{BLOCS}}', listFor('bloc'))

    const unknownPlaceholder = content.match(/\{\{[A-Z_]+\}\}/)
    if (unknownPlaceholder) throw new Error(`${name} : placeholder inconnu ${unknownPlaceholder[0]}`)

    writeOutput(name.replace('.template.md', '.md'), content)
  }
}

function writeVersion (topics, version) {
  const count = (kind) => topics.filter((topic) => topic.kind === kind).length

  writeOutput('VERSION.md', [
    '# Version',
    `- DSFR source : \`@gouvfr/dsfr@${version}\` (npm)`,
    `- Composants : ${count('composant')}`,
    `- Fondamentaux : ${count('fondamental')}`,
    `- Modèles de pages : ${count('page')}`,
    `- Modèles de blocs : ${count('bloc')}`,
    'Généré par `scripts/sync.mjs` : ne pas modifier à la main.'
  ].join('\n'))
}

main()
