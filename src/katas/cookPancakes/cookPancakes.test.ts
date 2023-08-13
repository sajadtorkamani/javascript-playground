import { describe, expect, test } from 'vitest'
import { cookPancakes } from './cookPancakes'

describe('cookPancakes', () => {
  test('returns the number of minutes needed too cook the pancakes', () => {
    expect(cookPancakes(4, 2)).toBe(4)
    expect(cookPancakes(2, 2)).toBe(2)
    expect(cookPancakes(1, 2)).toBe(2)
  })
})
