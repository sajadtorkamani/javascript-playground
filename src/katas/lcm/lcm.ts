// Find the smallest number that is divisible by all the numbers between
// `a` and `b`.
export function lcm(a: number, b: number): number {
  // For example assume `a` = is 1 and `b` is 5
  //
  // Start from 5 (b)
  // Check if 5 can be divided by all the numbers between 1-5 (1, 2, 3, 4, 5)
  // 5 can't be divided by 2, so go the next num: 6
  // 6 can't be divided by 4, so go to the next num: 7
  // Keep going until you find the num

  let num = b

  while (true) {
    if (isNumDivisibleByRange(num, a, b)) {
      return num
    } else {
      num += 1
    }
  }
}

function isNumDivisibleByRange(
  num: number,
  numA: number,
  numB: number
): boolean {
  const [lowerNum, higherNum] = [numA, numB].sort((a, b) => a - b)

  for (let x = lowerNum; x <= higherNum; x++) {
    if (num % x !== 0) {
      return false
    }
  }

  return true
}
