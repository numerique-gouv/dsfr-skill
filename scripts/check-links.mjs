#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { headingAnchors, markdownLinks } from './markdown-anchors.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const roots = [join(repositoryRoot, 'skills', 'dsfr-skill'), join(repositoryRoot, 'README.md')]
const markdownFiles = roots.flatMap((root) => root.endsWith('.md') ? [root] : readdirSync(root, { recursive: true }).filter((path) => path.endsWith('.md')).map((path) => join(root, path)))
const broken = []

for (const file of markdownFiles) {
  for (const { target } of markdownLinks(readFileSync(file, 'utf8'))) {
    if (/^(https?:|mailto:)/.test(target)) continue

    const [path, anchor] = target.split('#')
    const targetFile = path ? join(dirname(file), decodeURIComponent(path)) : file
    const location = `${file.slice(repositoryRoot.length + 1)} -> ${target}`

    if (!existsSync(targetFile)) broken.push(location)
    else if (anchor !== undefined && targetFile.endsWith('.md') && !headingAnchors(readFileSync(targetFile, 'utf8')).has(decodeURIComponent(anchor))) broken.push(`${location} (ancre absente)`)
  }
}

if (broken.length > 0) {
  console.error(`${broken.length} liens cassés :\n${broken.join('\n')}`)
  process.exit(1)
}

console.log(`${markdownFiles.length} fichiers, aucun lien interne cassé`)
