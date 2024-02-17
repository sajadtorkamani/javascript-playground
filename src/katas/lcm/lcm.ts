export function lcm(a: number, b: number): number {
  const [lowerNum, higherNum] = a < b ? [a, b] : [b, a]

  let currentLcm = lowerNum

  for (let index = lowerNum + 1; index <= higherNum; index++) {
    currentLcm = leastCommonMultiple(currentLcm, index)
  }

  return currentLcm
}

function greatestCommonDivisor(x: number, y: number): number {
  return y === 0 ? x : greatestCommonDivisor(y, x % y)
}

function leastCommonMultiple(x: number, y: number): number {
  return Math.abs(x * y) / greatestCommonDivisor(x, y)
}
