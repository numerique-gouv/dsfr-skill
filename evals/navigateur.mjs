import { createServer } from 'node:http'

const stateTimeout = 2000

function fragmentPage (fragment, version) {
  const cdn = `https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@${version}/dist`
  const active = fragment.replace(/<!--[\s\S]*?-->/g, '')
  const tags = (name) => active.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) || []
  const stylesheet = (file) => tags('link').some((tag) => /\brel\s*=\s*["']?stylesheet\b/i.test(tag) && file.test(tag))
  const stylesheets = [
    stylesheet(/\/dsfr(\.min)?\.css/i) ? '' : `<link rel="stylesheet" href="${cdn}/dsfr.min.css">`,
    stylesheet(/utility(\.min)?\.css/i) ? '' : `<link rel="stylesheet" href="${cdn}/utility/utility.min.css">`
  ].join('\n')
  const script = tags('script').some((tag) => /dsfr\.module(\.min)?\.js/i.test(tag)) ? '' : `<script type="module" src="${cdn}/dsfr.module.min.js"></script>`
  return `<!doctype html>
<html lang="fr" data-fr-scheme="light">
<head>
<meta charset="utf-8">
<title>Fragment</title>
${stylesheets}
</head>
<body>
<main>
${fragment}
</main>
${script}
</body>
</html>
`
}

async function openBrowser () {
  let playwright
  try {
    playwright = await import('playwright')
  } catch {
    throw new Error('--navigateur demande Playwright : npm install --prefix evals && npx --prefix evals playwright install chromium-headless-shell')
  }
  return playwright.chromium.launch()
}

function serve (html) {
  const server = createServer((request, response) => {
    if (request.url !== '/') return response.writeHead(404).end()
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }).end(html)
  })
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)))
}

async function render (browser, html, { pageComplete, version }) {
  const server = await serve(pageComplete ? html : fragmentPage(html, version))
  const url = `http://127.0.0.1:${server.address().port}/`
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const problems = []
  page.on('pageerror', (error) => problems.push(`erreur JS : ${error.message}`))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) problems.push(`console : ${message.text().split('\n')[0].trim()}`)
  })
  page.on('response', (response) => {
    if (response.status() >= 400) problems.push(`ressource en erreur ${response.status()} : ${response.url()}`)
  })

  try {
    await load(page, url)
    if (await dsfrStarted(page)) problems.push(...await pageProblems(page), ...await interactionProblems(page, url))
    else problems.push('le JS du DSFR ne démarre pas (pas de data-fr-js sur <html>)')
  } catch (error) {
    problems.push(`rendu interrompu : ${error.message.split('\n')[0]}`)
  } finally {
    await page.close()
    server.close()
  }

  return [...new Set(problems)]
}

async function load (page, url) {
  await page.goto(url, { waitUntil: 'load' })
  await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
}

function dsfrStarted (page) {
  return page.waitForFunction(() => document.documentElement.getAttribute('data-fr-js') === 'true', null, { timeout: stateTimeout }).then(() => true, () => false)
}

function pageProblems (page) {
  return page.evaluate(() => {
    const problems = []
    if (!getComputedStyle(document.documentElement).getPropertyValue('--background-default-grey').trim()) problems.push('le CSS du DSFR ne s\'applique pas')

    const blankIcons = [...document.querySelectorAll('[class*="fr-icon-"]')]
      .filter((element) => element.checkVisibility())
      .filter((element) => {
        const before = getComputedStyle(element, '::before')
        return [before.maskImage, before.webkitMaskImage].every((value) => !value || value === 'none')
      })
    if (blankIcons.length > 0) problems.push(`${blankIcons.length} icône(s) fr-icon-* sans image (utility.min.css absent ?)`)

    const lifeless = ['fr-modal', 'fr-collapse', 'fr-tabs', 'fr-accordion']
      .flatMap((name) => [...document.querySelectorAll(`.${name}`)].map((element) => ({ name, element })))
      .filter(({ element }) => ![...element.attributes].some((attribute) => attribute.name.startsWith('data-fr-js-')))
    for (const { name, element } of lifeless) problems.push(`.${name}${element.id ? `#${element.id}` : ''} non initialisé par le JS du DSFR`)

    return problems
  })
}

const expectedStates = [
  { selector: '.fr-modal', openedClass: 'fr-modal--opened', label: 'la modale' },
  { selector: '.fr-collapse', openedClass: 'fr-collapse--expanded', label: 'le panneau' },
  { selector: '.fr-tabs__panel', openedClass: 'fr-tabs__panel--selected', label: "le panneau d'onglet" }
]

async function interactionProblems (page, url) {
  const openers = await page.$$eval('button[aria-controls]', (buttons, states) => buttons
    .map((button, index) => ({ button, index, target: document.getElementById(button.getAttribute('aria-controls')) }))
    .filter(({ button, target }) => target && !button.disabled && button.checkVisibility() && !target.contains(button))
    .filter(({ button }) => button.getAttribute('aria-expanded') !== 'true' && button.getAttribute('aria-selected') !== 'true')
    .map(({ button, index, target }) => ({
      index,
      target: target.id,
      state: states.find((candidate) => target.matches(candidate.selector)),
      label: button.textContent.trim().replace(/\s+/g, ' ')
    }))
    .filter(({ state }) => state), expectedStates)
  const problems = []

  for (const opener of openers) {
    await load(page, url)
    await dsfrStarted(page)
    const opened = await page.waitForFunction(({ index, id }) => [document.querySelectorAll('button[aria-controls]')[index], document.getElementById(id)]
      .every((element) => [...element.attributes].some((attribute) => attribute.name.startsWith('data-fr-js-'))), { index: opener.index, id: opener.target }, { timeout: stateTimeout })
      .then(() => page.locator('button[aria-controls]').nth(opener.index).evaluate((button) => button.click()))
      .then(() => page.waitForFunction(({ id, openedClass }) => document.getElementById(id)?.classList.contains(openedClass), { id: opener.target, openedClass: opener.state.openedClass }, { timeout: stateTimeout }))
      .then(() => true, () => false)
    if (!opened) problems.push(`le bouton « ${opener.label} » n'ouvre pas ${opener.state.label} #${opener.target}`)
  }

  return problems
}

export { openBrowser, render }
