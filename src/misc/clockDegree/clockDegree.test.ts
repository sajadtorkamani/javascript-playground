import { describe, expect, test } from 'vitest'
import {
  digitalHourToAnalogHour,
  clockDegree,
  digitalMinuteToAnalogMinute,
} from './clockDegree'

describe('clockDegree', () => {
  test('converts digital time to analog time', () => {
    expect(clockDegree('01:01')).toEqual('30:6')
    expect(clockDegree('00:00')).toEqual('360:360')
    expect(clockDegree('01:03')).toEqual('30:18')
    expect(clockDegree('01:30')).toEqual('30:180')
    expect(clockDegree('12:05')).toEqual('360:30')
    expect(clockDegree('16:25')).toEqual('120:150')
    expect(clockDegree('17:09')).toEqual('150:54')
    expect(clockDegree('19:00')).toEqual('210:360')
    expect(clockDegree('20:34')).toEqual('240:204')
    expect(clockDegree('23:20')).toEqual('330:120')
  })
})

describe('digitalHourToAnalogHour', () => {
  test.each([
    ['00', '360'],
    ['01', '30'],
    ['12', '360'],
    ['16', '120'],
    ['17', '150'],
  ])(
    'converts digital hour (%s) to analog hour (%s)',
    (digitalHour, analogHour) => {
      expect(digitalHourToAnalogHour(digitalHour)).toEqual(analogHour)
    }
  )

  describe('validates input', () => {
    test.each(['26', '24', '-09', '0-6'])(
      `throws an error when input is %s`,
      (input) => {
        expect(() => digitalHourToAnalogHour(input)).toThrowError(
          /Check your time !/
        )
      }
    )
  })
})

describe('digitalMinuteToAnalogMinute', () => {
  test.each([
    ['01', '6'],
    ['00', '360'],
    ['03', '18'],
    ['30', '180'],
    ['05', '30'],
  ])(
    'converts digital minute (%s) to analog minute (%s)',
    (digitalMinute, analogMinute) => {
      expect(digitalMinuteToAnalogMinute(digitalMinute)).toEqual(analogMinute)
    }
  )

  describe('validates input', () => {
    test.each(['60', '70', '-04'])(
      `throws an error when input is %s`,
      (input) => {
        expect(() => digitalMinuteToAnalogMinute(input)).toThrowError(
          /Check your time !/
        )
      }
    )
  })
})
