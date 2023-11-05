export function shuffledArray(nums: Array<number>): Array<number> {
  for (let index = 0; index < nums.length; index++) {
    const currentNum = nums[index]
    const otherNums = nums.filter((_, i) => i !== index)

    // Check if the sum of the other numbers is equal to the current number
    const sum = otherNums.reduce((acc, num) => acc + num, 0)

    if (sum === currentNum) {
      return otherNums.sort((a, b) => a - b)
    }
  }

  return []
}
