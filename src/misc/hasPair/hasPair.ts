export function hasPair(nums: number[], targetSum: number): boolean {
  const numSet = new Set<number>()

  for (const num of nums) {
    const complement = targetSum - num

    if (numSet.has(complement)) {
      return true
    }

    numSet.add(num)
  }

  return false
}
