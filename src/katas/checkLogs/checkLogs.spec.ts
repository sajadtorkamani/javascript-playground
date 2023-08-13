import { describe, test, expect } from 'vitest'
import { checkLogs } from './checkLogs'

describe('checkLogs', () => {
  test('returns 1 day', () => {
    expect(checkLogs(['12:12:12'])).toEqual(1)
    expect(
      checkLogs(['00:00:00', '00:01:11', '02:15:59', '23:59:58', '23:59:59'])
    ).toEqual(1)
    expect(checkLogs(['12:00:00', '23:59:59', '00:00:00'])).toEqual(2)
    expect(checkLogs(['12:00:00', '12:00:00', '00:00:00'])).toEqual(3)
  })
})
