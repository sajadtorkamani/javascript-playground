import { test, assert } from 'vitest'
import { addNumbers } from './add-numbers'

test('addNumbers', () => {
  assert.equal(addNumbers(2, 2), 4)
})
