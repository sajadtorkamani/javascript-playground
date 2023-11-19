import { describe, test, expect } from 'vitest'
import { queueTime } from './queueTime'

describe('queueTime', () => {
  test('returns correct result', () => {
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toEqual(9)
    expect(queueTime([10, 2, 3, 3], 2)).toEqual(10)
    expect(queueTime([], 1)).toEqual(0)
    expect(queueTime([1, 2, 3, 4], 1)).toEqual(10)
    expect(queueTime([1, 2, 3, 4, 5], 100)).toEqual(5)
    expect(queueTime([5, 3, 4], 1)).toEqual(12)
    expect(queueTime([10, 2, 3, 3], 2)).toEqual(10)
    expect(queueTime([2, 3, 10, 2], 2)).toEqual(12)
  })
})
