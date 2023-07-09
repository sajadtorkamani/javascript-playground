import { assert, test } from 'vitest'
import { removeItem } from './removeItem'

test('removeItem', () => {
  const arr = [1, 2, 3, 4, 5]
  assert.deepEqual(removeItem(arr, 3), [1, 2, 4, 5])
})
