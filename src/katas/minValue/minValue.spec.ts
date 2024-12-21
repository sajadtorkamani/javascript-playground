import { describe, test, expect } from 'vitest'
import { minValue } from './minValue'

describe('minValue', () => {
  test('returns correct result', () => {
    expect(minValue([1, 2, 3, 10, -5], 2)).toEqual([1, 2, 3, -5])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 1)).toEqual([
      1, -2, 3, -4, 5, -6, 7, 8,
    ])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 2)).toEqual([
      -2, -2, -4, -4, -6, -6, 7,
    ])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 3)).toEqual([
      -2, -4, -4, -6, -6, -6,
    ])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 4)).toEqual([
      -4, -4, -6, -6, -6,
    ])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 5)).toEqual([-4, -6, -6, -6])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 6)).toEqual([-6, -6, -6])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 7)).toEqual([-6, -6])
    expect(minValue([1, -2, 3, -4, 5, -6, 7, 8], 8)).toEqual([-6])
  })
})
