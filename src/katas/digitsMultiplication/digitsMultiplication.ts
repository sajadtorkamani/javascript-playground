export function digitMultiplication(expr: string): number {
  const parts = (expr.match(/\d+/g) || []).map(BigInt)
  let operations = expr.match(/[+-]/g) || []
  const products = parts.map((part) => {
    return part
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, num) => acc * num)
  })

  let formulaString = new Array(products.length)
    .fill('{num}')
    .join('{operation}')

  // Replace all {num} tokens with the actual number
  while (formulaString.includes('{num}')) {
    const product = products.shift()

    if (typeof product === 'number') {
      formulaString = formulaString.replace('{num}', product.toString())
    }
  }

  // Replace all {operation} tokens with the actual operation
  while (formulaString.includes('{operation}')) {
    const operation = operations.shift()

    if (operation) {
      formulaString = formulaString.replace('{operation}', operation)
    }
  }

  return eval(formulaString)
}
