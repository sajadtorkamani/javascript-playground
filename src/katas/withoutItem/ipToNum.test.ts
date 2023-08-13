import { describe, test, expect } from 'vitest'
import { ipToNum, numToIp } from '../ipToNum'

describe('ipToNum', () => {
  test('converts IP number to decimal number', () => {
    expect(ipToNum('192.168.1.1')).toEqual(3232235777)
    expect(ipToNum('10.0.0.0')).toEqual(167772160)
    expect(ipToNum('176.16.0.1')).toEqual(2953838593)
  })
})

describe('numToIp', () => {
  test('converts number to IP', () => {
    expect(numToIp(3232235777)).toEqual('192.168.1.1')
    expect(numToIp(167772160)).toEqual('10.0.0.0')
    expect(numToIp(2953838593)).toEqual('176.16.0.1')
  })
})
