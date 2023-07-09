export function stringsConstruction(
  stringToForm: string,
  fromString: string
): number {
  let numConstructions = 0
  let charsUsed = 0
  let availableChars = fromString.split('')

  while (true) {
    for (let charNeeded of stringToForm.split('')) {
      // We no longer have the character needed
      if (!availableChars.includes(charNeeded)) {
        return numConstructions
      }

      availableChars = withoutItem(availableChars, charNeeded)
      charsUsed += 1

      if (charsUsed === stringToForm.length) {
        numConstructions += 1
        charsUsed = 0
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
