export function clockDegree(time: string): string {
  const [hour, minute] = time.split(':')

  try {
    return `${digitalHourToAnalogHour(hour)}:${digitalMinuteToAnalogMinute(
      minute
    )}`
  } catch (error) {
    return 'Check your time !'
  }
}

export function digitalHourToAnalogHour(hour: string): string {
  let hourInt = parseInt(hour, 10)
  if (!isValidInteger(hour) || hourInt < 0 || hourInt >= 24) {
    throw new Error('Check your time !')
  }

  const normalizedHour = hourInt % 12 || 12
  const hourValue = 30

  return (normalizedHour * hourValue).toString()
}

export function digitalMinuteToAnalogMinute(minute: string): string {
  let minuteInt = parseInt(minute, 10)
  if (!isValidInteger(minute) || minuteInt < 0 || minuteInt >= 60) {
    throw new Error('Check your time !')
  }

  const normalizedMinute = minuteInt || 60
  const minuteValue = 6

  return (normalizedMinute * minuteValue).toString()
}

function isValidInteger(value: string): boolean {
  return /^-?\d+$/.test(value)
}
