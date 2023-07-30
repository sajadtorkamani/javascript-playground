import { describe, expect, test } from 'vitest'
import { encrypt, encryptChar } from './encryptChar'

describe('encryptChar', () => {
  test.each([
    [1, 'a', 'b'],
    [1, 'b', 'c'],
    [2, 'a', 'c'],
    [2, 'b', 'd'],
    [1, 'z', 'a'],
    [2, 'z', 'b'],
  ])('encrypts char with positive key', (key, char, encryptedChar) => {
    expect(encryptChar(key, char)).toEqual(encryptedChar)
  })

  test.each([
    [-1, 'b', 'a'],
    [-1, 'c', 'b'],
    [-1, 'a', 'z'],
    [-2, 'a', 'y'],
    [-3, 'a', 'x'],
  ])('encrypts char with negative key', (key, char, encryptedChar) => {
    expect(encryptChar(key, char)).toEqual(encryptedChar)
  })
})

describe('encrypt', () => {
  test('encrypts correctly', () => {
    expect(encrypt(13, '')).toEqual('')
    expect(encrypt(0, 'no cypher')).toEqual('no cypher')
    expect(encrypt(13, 'Caesar Cipher')).toEqual('Pnrfne Pvcure')
    expect(encrypt(-5, 'Hello World!')).toEqual('Czggj Rjmgy!')
    expect(encrypt(27, 'Whoopi Goldberg')).toEqual('Xippqj Hpmecfsh')
  })
})
