import { describe, expect, test } from 'vitest'
import {
  canBeReadBottomToTop,
  canBeReadRightToLeft,
  canBeReadTopToBottom,
  isSatorSquare,
} from './isSatorSquare'

describe('isSatorSquare', () => {
  test.each([
    {
      tablet: [
        ['T', 'E', 'N'],
        ['E', 'Y', 'E'],
        ['N', 'E', 'T'],
      ],
    },
    {
      tablet: [
        ['B', 'A', 'T', 'S'],
        ['A', 'B', 'U', 'T'],
        ['T', 'U', 'B', 'A'],
        ['S', 'T', 'A', 'B'],
      ],
    },
    {
      tablet: [
        ['S', 'A', 'T', 'O', 'R'],
        ['A', 'R', 'E', 'P', 'O'],
        ['T', 'E', 'N', 'E', 'T'],
        ['O', 'P', 'E', 'R', 'A'],
        ['R', 'O', 'T', 'A', 'S'],
      ],
    },
  ])(`returns true if tablet is a Sator Square`, ({ tablet }) => {
    expect(isSatorSquare(tablet)).toBe(true)
  })

  test.each([
    {
      tablet: [
        ['N', 'O', 'T'],
        ['O', 'V', 'O'],
        ['N', 'O', 'T'],
      ],
      table: [
        ['B', 'A', 'T', 'S'],
        ['A', 'B', 'U', 'T'],
        ['T', 'U', 'B', 'A'],
        ['S', 'T', 'A', 'B'],
      ],
    },
  ])(`returns false if tablet is a Sator Square`, ({ tablet }) => {
    expect(isSatorSquare(tablet)).toBe(false)
  })

  describe('helpers', () => {
    describe('canBeReadTopToBottom', () => {
      test('returns true if word can be read top to bottom', () => {
        const tablet = [
          ['T', 'E', 'N'],
          ['E', 'Y', 'E'],
          ['N', 'E', 'T'],
        ]

        expect(canBeReadTopToBottom(tablet, 'TEN')).toBe(true)
      })

      test('returns false if word cannot be read top to bottom', () => {
        const tablet = [
          ['T', 'E', 'N'],
          ['E', 'Y', 'E'],
          ['Y', 'E', 'T'],
        ]

        expect(canBeReadTopToBottom(tablet, 'TEN')).toBe(false)
      })
    })

    describe('canBeReadBottomToTop', () => {
      test('returns true if word can be read bottom to top', () => {
        const tablet = [
          ['T', 'E', 'N'],
          ['E', 'Y', 'E'],
          ['X', 'E', 'T'],
        ]

        expect(canBeReadBottomToTop(tablet, 'TEN')).toBe(true)
      })

      test('returns false if word cannot be read bottom to top', () => {
        const tablet = [
          ['T', 'E', 'X'],
          ['E', 'Y', 'E'],
          ['Y', 'E', 'T'],
        ]

        expect(canBeReadBottomToTop(tablet, 'TEN')).toBe(false)
      })
    })

    describe('canBeReadRightToLeft', () => {
      test('returns true if word can be read right to left', () => {
        const tablet = [
          ['X', 'E', 'X'],
          ['E', 'Y', 'E'],
          ['N', 'E', 'T'], // Here
        ]

        expect(canBeReadRightToLeft(tablet, 'TEN')).toBe(true)
      })

      test('returns false if word cannot be read right to left', () => {
        const tablet = [
          ['X', 'E', 'X'],
          ['E', 'Y', 'E'],
          ['X', 'E', 'T'],
        ]

        expect(canBeReadRightToLeft(tablet, 'TEN')).toBe(false)
      })
    })
  })
})
