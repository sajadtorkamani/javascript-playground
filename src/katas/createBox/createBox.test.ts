import { describe, assert, test, expect } from 'vitest'
import { createBox } from './createBox'

describe('createBox', () => {
  test('returns correct result', () => {
    expect(createBox(6, 4)).toEqual([
      [1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1]]);
    //
    // expect(createBox(7, 8)).to.deep.equal([
    //   [1, 1, 1, 1, 1, 1, 1],
    //   [1, 2, 2, 2, 2, 2, 1],
    //   [1, 2, 3, 3, 3, 2, 1],
    //   [1, 2, 3, 4, 3, 2, 1],
    //   [1, 2, 3, 4, 3, 2, 1],
    //   [1, 2, 3, 3, 3, 2, 1],
    //   [1, 2, 2, 2, 2, 2, 1],
    //   [1, 1, 1, 1, 1, 1, 1]]);
    //
  })
});
