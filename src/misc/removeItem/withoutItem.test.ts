import { assert, test } from 'vitest'
import { withoutItem } from './withoutItem'

test('removeItem', () => {
  const arr = [1, 2, 3, 4, 5]
  assert.deepEqual(withoutItem(arr, 3), [1, 2, 4, 5])
})
