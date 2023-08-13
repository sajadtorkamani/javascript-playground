export function checkLogs(dates: string[]): number {
  if (dates.length === 0) {
    return 0
  }

  let numDays = 1

  dates.forEach((currentDate, index) => {
    // Skip the first date
    if (index === 0) {
      return
    }

    const previousDate = dates[index - 1]

    if (currentDate <= previousDate) {
      numDays += 1
    }
  })

  return numDays
}
