import { describe, test, expect } from 'vitest'
import { nameInStr } from './nameInStr'

describe('nameInStr', () => {
  test('returns correct result', () => {
    expect(nameInStr('Across the rivers', 'chris')).toEqual(true)
    // expect(nameInStr('Next to a lake', 'chris')).toEqual(false)
    // expect(nameInStr('Under a sea', 'chris')).toEqual(false)
    // expect(nameInStr('A crew that boards the ship', 'chris')).toEqual(false)
    // expect(nameInStr('A live son', 'Allison')).toEqual(false)
  })
})
