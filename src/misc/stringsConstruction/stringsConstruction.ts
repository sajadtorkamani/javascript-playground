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

      remainingChars = withoutItem(remainingChars, char)
      charsUsed += 1

      if (charsUsed === stringToForm.length) {
        charsUsed = 0
        count += 1
      }
    }
  }
}

export function withoutItem<TElement>(
  arr: TElement[],
  itemToExclude: TElement
): TElement[] {
  const index = arr.indexOf(itemToExclude)

  // Item doesn't in exist in array so return original array
  if (index === -1) {
    return arr
  }

  // Otherwise, return array with item removed
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
