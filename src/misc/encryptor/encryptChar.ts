export function encrypt(key: number, str: string): string {
  return str
    .split('')
    .map((char) => encryptChar(key, char))
    .join('')
}

export function encryptChar(key: number, char: string): string {
  if (!/[A-Za-z]/.test(char)) {
    return char
  }

  const isUppercase = char === char.toUpperCase()
  char = char.toLowerCase()

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const charIndex = alphabet.indexOf(char)

  let nextIndex = charIndex + key
  nextIndex = nextIndex >= 0 ? nextIndex : alphabet.length + (nextIndex % 26)

  const nextChar = alphabet[nextIndex % 26]

  return isUppercase ? nextChar.toUpperCase() : nextChar
}
