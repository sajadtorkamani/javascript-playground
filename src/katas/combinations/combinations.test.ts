import { describe, test, expect } from 'vitest'
import { combinations } from './combinations'
describe('combinations', () => {
  test('returns all possible combinations in array', () => {
    const nums = [1, 2, 3, 4, 5]

    expect(combinations(nums)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],

      [2, 3],
      [2, 4],
      [2, 5],

      [3, 4],
      [3, 5],

      [4, 5],
    ])
  })
})
