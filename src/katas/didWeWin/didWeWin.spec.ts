import { describe, it, expect } from 'vitest'
import { didWeWin } from './didWeWin'

describe('Sample Tests', () => {
  it('Should pass sample tests', () => {
    expect(
      didWeWin([
        [5, 'pass'],
        [5, 'pass'],
        [10, 'sack'],
        [10, 'run'],
      ])
    ).toBe(false)

    expect(
      didWeWin([
        [8, 'pass'],
        [5, 'sack'],
        [3, 'sack'],
        [5, 'run'],
      ])
    ).toBe(false)

    expect(didWeWin([[12, 'pass'], [], [], []])).toBe(true)
    expect(
      didWeWin([
        [2, 'run'],
        [5, 'pass'],
        [3, 'sack'],
        [8, 'pass'],
      ])
    ).toBe(true)
    expect(didWeWin([[5, 'pass'], [6, 'turnover'], [], []])).toBe(false)
  })
})
