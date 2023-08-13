export function ipToNum(ip: string): number {
  // 1. Convert to 4 binary octets
  const binaryOctets = ip.split('.').map((octet) => {
    const binary = Number(octet).toString(2)
    const normalizedBinary = binary.padStart(8, '0')

    return normalizedBinary
  })

  // 2. Convert each octet to decimal
  const binary = binaryOctets.join('')

  // 3. Combine the 4 decimal numbers into one decimal number
  const decimal = parseInt(binary, 2)

  return decimal
}

export function numToIp(num: number): string {
  // 1. Convert number to binary
  const binary = num.toString(2)
  const normalizedBinary = binary.padStart(32, '0')

  // 2. Split binary into 4 octets
  const octets = normalizedBinary.match(/.{1,8}/g) || []

  // 3. Convert each octet to decimal
  const decimals = octets.map((octet) => parseInt(octet, 2))

  return decimals.join('.')
}
