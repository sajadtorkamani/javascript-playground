import { describe, expect, test } from 'vitest'
import {
  digitalHourToAnalogHour,
  clockDegree,
  digitalMinuteToAnalogMinute,
} from './clockDegree'

describe('clockDegree', () => {
  test('converts digital time to analog time', () => {
    expect(clockDegree('01:01')).toEqual('30:6')
    // expect(clockDegree('00:00')).toEqual('360:360')
    // expect(clockDegree('01:03')).toEqual('30:18')
    // expect(clockDegree('01:30')).toEqual('30:180')
    // expect(clockDegree('12:05')).toEqual('360:30')
    // expect(clockDegree('16:25')).toEqual('120:150')
    // expect(clockDegree('17:09')).toEqual('150:54')
    // expect(clockDegree('19:00')).toEqual('210:360')
    // expect(clockDegree('20:34')).toEqual('240:204')
    // expect(clockDegree('23:20')).toEqual('330:120')
  })

  test('validates input', () => {
    // expect(clockDegree('26:78')).toEqual('Check your time !')
    // expect(clockDegree('23:60')).toEqual('Check your time !')
    // expect(clockDegree('24:60')).toEqual('Check your time !')
    // expect(clockDegree('24:00')).toEqual('Check your time !')
    // expect(clockDegree('-09:00')).toEqual('Check your time !')
  })
})

describe('digitalHourToAnalogHour', () => {
  test('converts digital hour to analog hour', () => {
    expect(digitalHourToAnalogHour('00')).toEqual('360')
    expect(digitalHourToAnalogHour('01')).toEqual('30')
    expect(digitalHourToAnalogHour('12')).toEqual('360')
    expect(digitalHourToAnalogHour('16')).toEqual('120')
    expect(digitalHourToAnalogHour('17')).toEqual('150')
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
})
