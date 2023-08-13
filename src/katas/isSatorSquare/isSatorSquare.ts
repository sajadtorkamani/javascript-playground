export function isSatorSquare(tablet: string[][]): boolean {
  for (const row of tablet) {
    const word = row.join('')

    // We can assume the word can be read left to right so need to check that

    if (!canBeReadTopToBottom(tablet, word)) {
      return false
    }

    if (!canBeReadBottomToTop(tablet, word)) {
      return false
    }

    if (!canBeReadRightToLeft(tablet, word)) {
      return false
    }
  }

  return true
}

export function canBeReadTopToBottom(
  tablet: string[][],
  word: string
): boolean {
  for (let rowIndex = 0; rowIndex < tablet.length; rowIndex++) {
    let column = ''

    for (let colIndex = 0; colIndex < tablet.length; colIndex++) {
      column += tablet[colIndex][rowIndex]
    }

    if (column === word) {
      return true
    }
  }

  return false
}

export function canBeReadBottomToTop(
  tablet: string[][],
  word: string
): boolean {
  for (let rowIndex = 0; rowIndex < tablet.length; rowIndex++) {
    let column = ''

    for (
      let colIndex = tablet[rowIndex].length - 1;
      colIndex >= 0;
      colIndex--
    ) {
      column += tablet[colIndex][rowIndex]
    }

    if (column === word) {
      return true
    }
  }

  return false
}

export function canBeReadRightToLeft(
  tablet: string[][],
  word: string
): boolean {
  for (let rowIndex = 0; rowIndex < tablet.length; rowIndex++) {
    let column = ''

    for (
      let colIndex = tablet[rowIndex].length - 1;
      colIndex >= 0;
      colIndex--
    ) {
      column += tablet[rowIndex][colIndex]
    }

    if (column === word) {
      return true
    }
  }

  return false
}
