import { test, assert, describe } from 'vitest'
import { dupeDetect } from './dupeDetect'

describe('dupeDetect', () => {
  test('returns correct result', () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const kataList: Array<(x: number) => unknown> = [
      (x) => x * 2,
      (x) => x ** 2, //
      (x) => x + 20,
      (x) => x / 1000,
      (x) => x * x, //
      (x) => Math.pow(x, 2), //
      (x) => x % 2,
      (x) => x * 2 ** 4, //
      (x) => x << 4, //
      (x) => numbers.map((e) => e + x),
      (x) => numbers.map((e) => e * x),
      (x) => numbers.map((num) => num + x),
      (x) => numbers.reduce((a, e) => a + e, x),
      (x) => numbers.filter((e) => e > x),
      (x) => numbers.filter((e) => !(e <= x)),
    ]

    const exampleTestSet = [
      kataList.slice(0, 9),
      kataList.slice(9),
      kataList.slice(8, 11),
      kataList,
    ]

    const exampleSol = [
      [
        [1, 4, 5],
        [7, 8],
      ],
      [
        [0, 2],
        [4, 5],
      ],
      [],
      [
        [1, 4, 5],
        [7, 8],
        [9, 11],
        [13, 14],
      ],
    ]

    exampleTestSet.forEach((example, index) =>
      assert.deepEqual(dupeDetect(example), exampleSol[index])
    )
  })
})
