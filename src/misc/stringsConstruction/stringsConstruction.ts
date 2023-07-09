export function stringsConstruction(
  stringToForm: string,
  fromString: string
): number {
  let count = 0
  let charsUsed = 0
  let remainingChars = fromString.split('')

  while (true) {
    for (let char of stringToForm.split('')) {
      // We don't have the char
      if (!remainingChars.includes(char)) {
        return count
      }

      remainingChars = removeItem(remainingChars, char)
      charsUsed += 1

      if (charsUsed === stringToForm.length) {
        charsUsed = 0
        count += 1
      }
    }
  }
}

export function removeItem(
  arrOrString: string | unknown[],
  itemToExclude: unknown
) {
  const arr = Array.isArray(arrOrString) ? arrOrString : arrOrString.split('')
  const index = arr.indexOf(itemToExclude)

  if (index === -1) {
    return arr
  }

  arr.splice(index, 1)

  return arr
}
