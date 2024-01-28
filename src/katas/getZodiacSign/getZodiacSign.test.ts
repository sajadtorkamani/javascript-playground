import { describe, test, expect } from 'vitest'
import { getDayRange, getZodiacSign } from './getZodiacSign'

describe('getZodiacSign', () => {
  test('returns correct result', () => {
    expect(getZodiacSign(1, 5)).toEqual('Taurus')
    // expect(getZodiacSign(10, 10)).toEqual('Libra')
    // expect(getZodiacSign(25, 2)).toEqual('Pisces')
    // expect(getZodiacSign(6, 9)).toEqual('Virgo')
    // expect(getZodiacSign(25, 11)).toEqual('Sagittarius')
    // expect(getZodiacSign(6, 1)).toEqual('Capricorn')
  })
})

describe('getZodiacSignDayRanges', () => {
  test('returns correct result', () => {
    expect(getDayRange('March 21-April 19')).toEqual({ lower: 80, upper: 109 })
  })
})
