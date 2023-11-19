export function queueTime(customers: Array<number>, numTills: number): number {
  let queue = customers.slice()
  let numSecondsElapsed = 0

  while (queue.length > 0) {
    for (let tillIndex = 0; tillIndex < numTills; tillIndex++) {
      const customerSecsRemaining = queue[tillIndex]

      if (!customerSecsRemaining) {
        continue
      }

      // Subtract sec from customer
      queue[tillIndex] = customerSecsRemaining - 1
    }

    queue.forEach((value, index, originalQueue) => {
      if (value === 0) {
        removeElement(originalQueue, index)
      }
    })

    // Remove customers who have finished checking out
    queue = queue.filter((value) => value !== 0)

    // Increment seconds
    numSecondsElapsed += 1
  }

  return numSecondsElapsed
}

function removeElement(arr: Array<unknown>, index: number) {
  return arr.splice(index, 1)
}
