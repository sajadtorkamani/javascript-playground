import { describe, assert, test } from 'vitest'
import { joinArraysById, joinObjects } from './joinObjects'

describe('joinArraysById', () => {
  test('joins two arrays where all IDs are unique', () => {
    const arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ]

    const arr2 = [
      { id: 3, y: 2 },
      { id: 4, z: 3 },
    ]

    const output = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
      { id: 3, y: 2 },
      { id: 4, z: 3 },
    ]

    assert.deepEqual(joinArraysById(arr1, arr2), output)
  })

  test('joins two arrays where some IDs are duplicated but no keys are duplicated', () => {
    const arr1 = [
      { id: 2, x: 9 },
      { id: 1, x: 1 },
    ]

    const arr2 = [
      { id: 2, y: 2 },
      { id: 3, z: 3 },
    ]

    const output = [
      { id: 1, x: 1 },
      { id: 2, x: 9, y: 2 },
      { id: 3, z: 3 },
    ]

    assert.deepEqual(joinArraysById(arr1, arr2), output)
  })

  test('should join objects with duplicate ids and duplicate keys', () => {
    const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
    const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]
    const output = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]

    assert.deepEqual(joinArraysById(arr1, arr2), output)
  })
})

describe('joinObjects', () => {
  test('joins two objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    assert.deepEqual(joinObjects(obj1, obj2), { a: 1, b: 2 })
  })

  describe('handles duplicate keys', () => {
    test('where the value is a scalar', () => {
      const obj1 = { a: 1, b: 2 }
      const obj2 = { a: 10 }
      assert.deepEqual(joinObjects(obj1, obj2), { a: 10, b: 2 })
    })

    test('where the value is an object', () => {
      const obj1 = { a: { foo: 'bar' }, b: 2 }
      const obj2 = { a: { foo: 'baz' } }
      assert.deepEqual(joinObjects(obj1, obj2), { a: { foo: 'baz' }, b: 2 })
    })
  })
})
