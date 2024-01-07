import { describe, test, expect } from 'vitest'
import { mirror, mirrorChar } from './mirror'

describe('mirror', () => {
  test('handles inputs without a reverse list', () => {
    expect(mirror('Welcome home')).toEqual('dvoxlnv slnv')
    expect(mirror('hello')).toEqual('svool')
    expect(mirror('goodbye')).toEqual('tllwybv')
    expect(mirror('ngmlsoor')).toEqual('mtnohlli')
    expect(mirror('gsrh rh z hvxivg')).toEqual('this is a secret')
  })

  test('handles inputs with a reverse list', () => {
    expect(mirror('Welcome home', 'w')).toEqual('welcome home')
    expect(mirror('hello', 'abcdefgh')).toEqual('adllo')
    expect(mirror('goodbye', '')).toEqual('goodbye')
    expect(mirror('CodeWars', '+-*/=')).toEqual('codewars')
    expect(mirror('this is a secret', ' *')).toEqual('this*is*a*secret')
  })
})

describe('mirrorChar', () => {
  test('returns character at the opposite end of the alphabet', () => {
    expect(mirrorChar('a')).toEqual('z')
    expect(mirrorChar('b')).toEqual('y')
    expect(mirrorChar('c')).toEqual('x')
    expect(mirrorChar('d')).toEqual('w')

    expect(mirrorChar('z')).toEqual('a')
    expect(mirrorChar('y')).toEqual('b')
    expect(mirrorChar('x')).toEqual('c')
    expect(mirrorChar('w')).toEqual('d')
  })

  test("ignores reverse list if it's a single char", () => {
    expect(mirror('a', 'w')).toEqual('a')
    expect(mirror('b', 'w')).toEqual('b')
    expect(mirror('c', 'w')).toEqual('c')
  })

  test('uses custom reverse list if char is in the reverse list', () => {
    const reverseList = 'abcdefgh'

    expect(mirrorChar('a', reverseList)).toEqual('h')
    expect(mirrorChar('b', reverseList)).toEqual('g')

    expect(mirrorChar('h', reverseList)).toEqual('a')
    expect(mirrorChar('g', reverseList)).toEqual('b')
  })

  test(
    'returns original char if custom reverse list is given but char is not' +
      'in the custom reverse list',
    () => {
      const reverseList = 'abcdefgh'

      expect(mirrorChar('i', reverseList)).toEqual('i')
      expect(mirrorChar('j', reverseList)).toEqual('j')
      expect(mirrorChar('k', reverseList)).toEqual('k')
    }
  )
})
