import { describe, test, expect } from 'vitest'
import { toPretty } from './toPretty'

describe('toPretty', () => {
  test('weeks', () => {
    expect(toPretty(31449600)).toEqual('52 weeks ago')
    expect(toPretty(10000000)).toEqual('16 weeks ago')
    expect(toPretty(1000000)).toEqual('a week ago')
  })

  test('days', () => {
    expect(toPretty(400000)).toEqual('4 days ago')
    expect(toPretty(140000)).toEqual('a day ago')
  })

  test('hours', () => {
    expect(toPretty(40000)).toEqual('11 hours ago')
    expect(toPretty(4000)).toEqual('an hour ago')
  })

  test('minutes', () => {
    expect(toPretty(180)).toEqual('3 minutes ago')
    expect(toPretty(90)).toEqual('a minute ago')
  })

  test('seconds', () => {
    expect(toPretty(30)).toEqual('30 seconds ago')
    expect(toPretty(1)).toEqual('a second ago')
    expect(toPretty(0)).toEqual('just now')
  })
})
