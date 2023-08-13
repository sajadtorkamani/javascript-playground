import { describe, test, expect } from 'vitest'
import { alanAnnoyingKid } from './alanAnnoyingKid'

describe('alanAnnoyingKid', () => {
  test('handles negating positive statements', () => {
    expect(alanAnnoyingKid('Today I played football.')).toEqual(
      "I don't think you played football today, I think you didn't play at all!"
    )

    // expect(alanAnnoyingKid("Today I didn't play football.")).toEqual(
    //   "I don't think you didn't play football today, I think you did play it!"
    // )
    //
    // expect(
    //   alanAnnoyingKid("Today I didn't attempt to hardcode this Kata.")
    // ).toEqual(
    //   "I don't think you didn't attempt to hardcode this Kata today, I think you did attempt it!"
    // )
    //
    // expect(alanAnnoyingKid('Today I cleaned the kitchen.')).toEqual(
    //   "I don't think you cleaned the kitchen today, I think you didn't clean at all!"
    // )
  })
})
