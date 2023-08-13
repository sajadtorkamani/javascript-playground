import { expect, test } from 'vitest'
import { getCharCount } from './getCharCount'

test('getCharCount', () => {
  expect(getCharCount('hello', 'l')).toBe(2)
  expect(getCharCount('hellllo', 'l')).toBe(4)
  expect(getCharCount('hellllo', 'x')).toBe(0)
})
