export function clockDegree(time: string): string {
  return '...'
}

export function digitalHourToAnalogHour(hour: string): string {
  const normalizedHour = parseInt(hour, 10) % 12 || 12
  const hourValue = 30

  return (normalizedHour * hourValue).toString()
}

export function digitalMinuteToAnalogMinute(minute: string): string {
  const normalizedMinute = parseInt(minute, 10) || 60
  const minuteValue = 6

  return (normalizedMinute * minuteValue).toString()
}
