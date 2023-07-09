import { describe, assert, test } from 'vitest'
import { stringsConstruction } from './stringsConstruction'

describe('stringsConstruction', () => {
  test('returns correct result', () => {
    assert.equal(stringsConstruction('abc', 'abccba'), 2)
  })
})
