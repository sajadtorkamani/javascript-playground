import { assert, test, describe } from 'vitest'
import { hasPair } from './hasPair'

describe('hasPair', () => {
  test('should return true if the array has a unique pair that adds up to the sum', () => {
    assert.equal(hasPair([1, 3, 7], 10), true)
    assert.equal(hasPair([-5, -2, 1], -1), true)
    assert.equal(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 36), true)
  })

  test('should return false if the array does not have a unique pair that adds up to the sum', () => {
    assert.equal(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 3), false)
  })
})
