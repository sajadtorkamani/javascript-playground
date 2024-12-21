export function combinations<T>(arr: T[]): T[][] {
  const result: T[][] = []

  arr.forEach((element, index) => {
    const nextElements = arr.slice(index + 1)

    nextElements.forEach((nextElement) => {
      result.push([element, nextElement])
    })
  })

  return result
}
