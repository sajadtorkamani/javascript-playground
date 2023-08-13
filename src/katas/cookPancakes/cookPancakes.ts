export function cookPancakes(
  targetNumPancakes: number,
  fryingPanSize: number
): number {
  let numMinutes = 0
  let numPancakeSidesCooked = 0
  const targetNumPancakeSidesToCook = targetNumPancakes * 2

  while (numPancakeSidesCooked < targetNumPancakeSidesToCook) {
    numPancakeSidesCooked += fryingPanSize
    numMinutes += 1
  }

  return numMinutes > 1 ? numMinutes : 2
}
