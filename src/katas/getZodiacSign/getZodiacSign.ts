export function getZodiacSign(day: number, month: number): string {
  return 'todo'
}

export function getDayRange(dateString: string): {
  lower: number
  upper: number
} {
  const numDaysElapsedInYear = getDaysElapsedInYear()

  return { lower: 0, upper: 0 }
}

function getDaysElapsedInYear(day: number, month: number): number {
  // Create a date object for the start of the year
  const COMMON_YEAR = 2002

  const startOfYear = new Date(COMMON_YEAR, 0, 1)

  // Create a date object for the current date
  const currentDate = new Date(COMM)

  // Calculate the difference in time (in milliseconds)
  const diffInTime = currentDate.getTime() - startOfYear.getTime()

  // Convert the difference in time to days
  const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))

  return diffInDays
}
