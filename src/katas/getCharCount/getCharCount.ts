export function getCharCount(str: string, char: string): number {
  return (str.match(new RegExp(char, 'gi')) || []).length
}
