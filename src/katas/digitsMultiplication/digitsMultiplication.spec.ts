import { describe, test, expect } from 'vitest'
import { digitMultiplication } from './digitsMultiplication'

describe('digitsMultiplication', () => {
  test('returns correct result', () => {
    expect(
      digitMultiplication(
        '1-1111111111111111111111111111111111111111111111111111111111111'
      )
    ).toBe(0)
    //
    //
    // expect(digitMultiplication('53+5')).toBe(20)
    // expect(digitMultiplication('266-66')).toBe(36)
    // expect(digitMultiplication('555')).toBe(125)
    //
    // expect(digitMultiplication('10000345+77-2')).toBe(47)
    // expect(digitMultiplication('12345-11989+1231111')).toBe(-522)
    // expect(digitMultiplication('2395')).toBe(270)
    // expect(digitMultiplication('3434343-12121212+4949494-122')).toBe(191788)
    // expect(digitMultiplication('13579+9+9+9-11')).toBe(971)
    // expect(digitMultiplication('6-3-3-3-4')).toBe(-7)
  })
})
