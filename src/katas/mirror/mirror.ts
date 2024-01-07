export function mirror(originalString: string, reverseList?: string): string {
  let str = originalString.toLowerCase()

  str = str.split('').map(mirrorChar).join('')

  return str
}

export function mirrorChar(char: string): string {
  if (!/[a-z]/i.test(char)) {
    return char
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  if (char === 'a') {
    return 'z'
  }

  const charPosition = alphabet.indexOf(char) + 1

  return alphabet.slice(-charPosition, -charPosition + 1)
}
