export function minValue(nums: number[], numAdjacents: number): number[] {
  return chunkArray(nums, numAdjacents).map((chunk) => Math.min(...chunk))
}

function chunkArray<T>(arr: T[], chunkSize: number) {
  const chunkedArr = []

  for (let index = 0; index < arr.length; index++) {
    const chunk = arr.slice(index, index + chunkSize)

    if (chunk.length === chunkSize) {
      chunkedArr.push(chunk)
    }
  }

  return chunkedArr
}
