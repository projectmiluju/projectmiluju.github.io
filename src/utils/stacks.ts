function collapseSpaces(value: string) {
  return value.trim().replace(/\s+/g, ' ');
}

export function getStackKey(stack: string) {
  const trimmed = collapseSpaces(stack);
  if (!trimmed) return '';

  const withoutVersion = trimmed
    .replace(/\s+\(?v?\d+(?:\.\d+)*\)?$/i, '')
    .replace(/\s+(?:lts)$/i, '');

  return collapseSpaces(withoutVersion).toLocaleLowerCase();
}

export function getStackGroupLabel(stack: string) {
  const trimmed = collapseSpaces(stack);
  if (!trimmed) return '';

  return collapseSpaces(
    trimmed
      .replace(/\s+\(?v?\d+(?:\.\d+)*\)?$/i, '')
      .replace(/\s+(?:LTS)$/i, '')
  );
}
