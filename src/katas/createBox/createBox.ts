export function createBox(
  numRows: number,
  numColumns: number
): Array<number[]> {
  return new Array(numRows).fill('x').map((_, index) => {
    return new Array(numColumns).fill('x')
  })
}
