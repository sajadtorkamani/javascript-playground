export function removeItem(arr: unknown[], itemToRemove: unknown) {
  const index = arr.indexOf(itemToRemove)

  // Item doesn't in exist in array so return original array
  if (index === -1) {
    return arr
  }

  // Otherwise, return array with item removed
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
