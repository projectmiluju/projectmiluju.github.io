const ACRONYM_TAGS = new Set([
  'AI',
  'API',
  'AWS',
  'BFF',
  'CI/CD',
  'CPU',
  'CS',
  'CSS',
  'CORS',
  'DDD',
  'DX',
  'E2E',
  'HDD',
  'IME',
  'JPA',
  'JSON-LD',
  'JWT',
  'MCP',
  'MDX',
  'PRD',
  'RAG',
  'SCSS',
  'SDK',
  'SEO',
  'SPA',
  'SQL',
  'SSD',
  'SVG',
  'TIL',
  'TSX',
  'UI',
  'URL',
  'UX',
  'VITE',
]);

function toTitleCase(value: string) {
  return value.replace(/\b([a-z])([a-z]*)/g, (_, first: string, rest: string) => (
    first.toUpperCase() + rest.toLowerCase()
  ));
}

export function getTagKey(tag: string) {
  return tag.trim().toLocaleLowerCase();
}

export function normalizeTagLabel(tag: string) {
  const trimmed = tag.trim().replace(/\s+/g, ' ');
  if (!trimmed) return '';

  const upper = trimmed.toUpperCase();
  if (ACRONYM_TAGS.has(upper)) {
    return upper === 'VITE' ? 'Vite' : upper;
  }

  const isPlainAlpha = /^[A-Za-z ]+$/.test(trimmed);
  if (!isPlainAlpha) return trimmed;

  if (trimmed === trimmed.toLowerCase() || trimmed === trimmed.toUpperCase()) {
    return toTitleCase(trimmed);
  }

  return trimmed;
}

export function normalizeTags(tags: string[]) {
  const deduped = new Map<string, string>();

  for (const tag of tags) {
    const label = normalizeTagLabel(tag);
    const key = getTagKey(label);
    if (!label || deduped.has(key)) continue;
    deduped.set(key, label);
  }

  return [...deduped.values()];
}
