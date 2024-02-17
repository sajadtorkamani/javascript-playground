type Play = [number, 'pass' | 'run' | 'sack' | 'turnover'] | []

// Given our team is 10 yards way from the endzone and you're given a list of
// the next 4 plays, determine if the team won the game.
//
// The following plays earn points:
// - pass
// - run
//
// The following plays lose points:
// - sack
//
// The following plays end the game:
// - turnover

export function didWeWin(plays: Play[]): boolean {
  // If we get a turnover, we lost
  if (plays.some((play) => play[1] === 'turnover')) {
    return false
  }

  // Otherwise, count the scores up and determine if it's >= 10
  let score = 0

  plays.forEach((play) => {
    const [yards, type] = play

    if (!yards || !type) {
      return true
    }

    if (type === 'pass' || type === 'run') {
      score += yards
    } else {
      score -= yards
    }
  })

  return score > 10
}
