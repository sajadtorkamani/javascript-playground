export function dupeDetect(solutions: Array<Function>): Array<Array<number>> {
  const results: { result: number; index: number }[] = []
  let groupedResults: Record<string, number[]> = {}

  // Build an array of results: [{ index: 0, result: 5}, { index: 1, result: 5}]
  solutions.forEach((solution, index) => {
    const solutionResult = solution(100)
    results.push({ index, result: solutionResult })
    if (groupedResults.hasOwnProperty(solutionResult)) {
      groupedResults[solutionResult].push(index)
    } else {
      groupedResults[solutionResult] = [index]
    }
  })

  return [[]]
}
