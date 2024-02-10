export function toPretty(seconds: number): string {
  const MINUTE_SECONDS = 60
  const HOUR_SECONDS = 60 * MINUTE_SECONDS
  const DAY_SECONDS = 24 * HOUR_SECONDS
  const WEEK_SECONDS = 7 * DAY_SECONDS

  switch (true) {
    case seconds >= WEEK_SECONDS:
      return formatTime(seconds / WEEK_SECONDS, 'week')
    case seconds >= DAY_SECONDS:
      return formatTime(seconds / DAY_SECONDS, 'day')
    case seconds >= HOUR_SECONDS:
      return formatTime(seconds / HOUR_SECONDS, 'hour')
    case seconds >= MINUTE_SECONDS:
      return formatTime(seconds / MINUTE_SECONDS, 'minute')
    default:
      return formatTime(seconds, 'second')
  }
}

function formatTime(
  value: number,
  unit: 'day' | 'week' | 'hour' | 'minute' | 'second'
): string {
  value = Math.floor(value)

  if (value === 0 && unit === 'second') {
    return 'just now'
  }

  const prefix = unit === 'hour' ? 'an' : 'a'

  return value === 1 ? `${prefix} ${unit} ago` : `${value} ${unit}s ago`
}
