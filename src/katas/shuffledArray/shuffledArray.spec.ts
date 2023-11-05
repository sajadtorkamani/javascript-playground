import { describe, test, expect } from 'vitest'
import { shuffledArray } from './shuffledArray'

describe('shuffledArray', () => {
  test('returns correct result', () => {
    expect(shuffledArray([1, 12, 3, 6, 2])).toEqual([1, 2, 3, 6])
    expect(shuffledArray([1, -3, -5, 7, 2])).toEqual([-5, -3, 2, 7])
    expect(shuffledArray([2, -1, 2, 2, -1])).toEqual([-1, -1, 2, 2])
    expect(shuffledArray([-3, -3])).toEqual([-3])
  })
})
