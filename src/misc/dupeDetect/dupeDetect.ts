export function dupeDetect(solutions: Array<Function>): Array<Array<number>> {
  const EXAMPLE_INPUT = 100
  const groupedResults: Record<string, number[]> = {}

  solutions.forEach((solution, index) => {
    const solutionResult = solution(EXAMPLE_INPUT)

    if (groupedResults.hasOwnProperty(solutionResult)) {
      groupedResults[solutionResult].push(index)
    } else {
      groupedResults[solutionResult] = [index]
    }
  })

  return Object.values(groupedResults)
    .filter((duplicateAnswers) => duplicateAnswers.length > 1)
    .sort((a, b) => a[0] - b[0])
}
