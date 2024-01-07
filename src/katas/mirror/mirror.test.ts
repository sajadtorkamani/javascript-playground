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

  test('ignores non-alphabet chars', () => {
    expect(mirrorChar('!')).toEqual('!')
    expect(mirrorChar(' ')).toEqual(' ')
  })
})
