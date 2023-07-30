import { assert, test } from 'vitest'
import { removeItemV1, removeItemV2 } from './removeItem'

test('removeItemV1', () => {
  const arr = [1, 2, 3, 4, 5]
  assert.deepEqual(removeItemV1(arr, 3), [1, 2, 4, 5])
})

test('removeItemV2', () => {
  const arr = [1, 2, 3, 4, 5]
  assert.deepEqual(removeItemV2(arr, 3), [1, 2, 4, 5])
})
