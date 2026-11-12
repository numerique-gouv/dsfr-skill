export function headingAnchor (heading) {
  return heading
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*`]/g, '')
    .replace(/(^|[^\p{L}\p{N}])_+|_+(?=[^\p{L}\p{N}]|$)/gu, '$1')
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, '')
    .replace(/ /g, '-')
}

export function headingAnchorsInOrder (markdown) {
  const entries = []
  const occurrences = new Map()
  const seen = new Set()

  for (const [, heading] of markdown.replace(/```[\s\S]*?```/g, '').matchAll(/^#{1,6} +(.+?) *#*$/gm)) {
    const base = headingAnchor(heading)
    let anchor = base

    while (seen.has(anchor)) {
      const count = (occurrences.get(base) || 0) + 1
      occurrences.set(base, count)
      anchor = `${base}-${count}`
    }

    seen.add(anchor)
    entries.push({ heading, anchor })
  }

  return entries
}

export function headingAnchors (markdown) {
  return new Set(headingAnchorsInOrder(markdown).map((entry) => entry.anchor))
}

export function markdownLinks (markdown) {
  const prose = markdown.replace(/```[\s\S]*?```/g, (block) => ' '.repeat(block.length)).replace(/`[^`\n]*`/g, (code) => ' '.repeat(code.length))
  return [...prose.matchAll(/\[([^\]]*)\]\(([^)\s]+)\)/g)].map((match) => ({
    index: match.index,
    length: match[0].length,
    text: markdown.slice(match.index + 1, match.index + 1 + match[1].length),
    target: match[2]
  }))
}
