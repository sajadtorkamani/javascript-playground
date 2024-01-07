export function mirror(originalString: string, reverseList?: string): string {
  let str = originalString.toLowerCase()

  str = str
    .split('')
    .map((char) => mirrorChar(char, reverseList))
    .join('')

  return str
}

export function mirrorChar(char: string, customReverseList?: string): string {
  // Handle special case where reverseList is invalid (e.g. empty string or
  // a single char). In this case, we want to return the original char.
  if (typeof customReverseList === 'string' && customReverseList.length < 2) {
    return char
  }

  const reverseList = customReverseList
    ? customReverseList
    : 'abcdefghijklmnopqrstuvwxyz'

  if (!reverseList.includes(char)) {
    return char
  }

  // Handle special case where char is the first letter
  if (reverseList.indexOf(char) === 0) {
    return reverseList.slice(-1)
  }

  const charPosition = reverseList.indexOf(char) + 1

  return reverseList.slice(-charPosition, -charPosition + 1)
}
