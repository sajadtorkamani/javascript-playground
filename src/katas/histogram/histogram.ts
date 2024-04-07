export function histogram(rollCounts: number[]): string {
  return (
    rollCounts
      .map((rollCount, index) => {
        return printLine({ num: index + 1, rollCount })
      })
      .reverse()
      .join('\n') + '\n'
  )
}

export function printLine({
  num,
  rollCount,
}: {
  num: number
  rollCount: number
}) {
  const prefix = num + '|'

  if (rollCount === 0) {
    return prefix
  }

  return `${prefix}${'#'.repeat(rollCount)} ${rollCount}`
}
