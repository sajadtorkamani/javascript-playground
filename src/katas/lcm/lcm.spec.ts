import { describe, it, expect } from 'vitest'
import { lcm } from './lcm' // Make sure to adjust this import path to where your mnLCM function is located.

describe('Basic Tests', () => {
  it('It should works for basic tests.', () => {
    expect(lcm(1, 5)).toBe(60)
    expect(lcm(1, 2)).toBe(2)
    expect(lcm(5, 1)).toBe(60)
    expect(lcm(1, 10)).toBe(2520)
    expect(lcm(2, 3)).toBe(6)
    expect(lcm(3, 5)).toBe(60)
    expect(lcm(10, 20)).toBe(232792560)
    expect(lcm(1, 25)).toBe(26771144400)
    // expect(lcm(24, 25)).toBe(600)
  })
})
