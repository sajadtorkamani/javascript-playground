import { describe, test, expect } from 'vitest'
import { histogram, printLine } from './histogram'

describe('histogram', () => {
  test('returns correct result', () => {
    const expectedOutput = `6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`
    const actualOutput = histogram([7, 3, 10, 1, 0, 5])
    expect(actualOutput).toEqual(expectedOutput)
  })
})

describe('printLine', () => {
  test('returns correct result for values greater than 0', () => {
    expect(printLine({ num: 6, rollCount: 5 })).toEqual('6|##### 5')
    expect(printLine({ num: 3, rollCount: 7 })).toEqual('3|####### 7')
  })

  test('returns correct result for 0 value', () => {
    expect(printLine({ num: 6, rollCount: 0 })).toEqual('6|')
  })
})
