export function joinArraysById(arr1: any[], arr2: any[]) {
  let result = arr1.map((item) => {
    const arr2Item = arr2.find((arr2Item) => arr2Item.id === item.id)

    // If we don't have a duplicate item, return the original item
    if (!arr2Item) {
      return item
    }

    // Otherwise, merge the two duplicates
    return joinObjects(item, arr2Item)
  })

  const uniqueArr2Items = arr2.filter(
    (item) => !arr1.find((arr1Item) => arr1Item.id === item.id)
  )

  // Add unique items from arr2
  uniqueArr2Items.forEach((item) => {
    result.push(item)
  })

  return result.sort((a, b) => a.id - b.id)
}

export function joinObjects(obj1: Object, obj2: Object) {
  return { ...obj1, ...obj2 }
}
