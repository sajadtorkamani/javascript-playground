export function hasPair(nums: number[], targetSum: number): boolean {
  // Check if the array has a unique pair that adds up to the sum

  for (let index = 0; index < nums.length; index++) {
    // Skip the last num
    if (index === nums.length - 1) {
      continue
    }
    const num = nums[index]
    const otherNums = nums.slice(index + 1)

    // Compare number to each of the other numbers
    for (
      let otherNumIndex = 0;
      otherNumIndex < otherNums.length;
      otherNumIndex++
    ) {
      const otherNum = otherNums[otherNumIndex]

      // Skip other number if it's the same as the current number
      if (otherNum === num) {
        continue
      }

      const sum = num + otherNum

      console.log({ num, otherNum, sum })

      if (sum === targetSum) {
        return true
      }
    }
  }

  return false
}
