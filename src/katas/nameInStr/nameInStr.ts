export function nameInStr(str: string, name: string): boolean {
  // Normalize str and name to lowercase
  str = str.toLowerCase()
  name = name.toLowerCase()

  // Create variable leftoverChars to contain chars that can be searched
  let leftoverChars = str

  while (name.length > 0) {
    // Proceed to next char in `name`: h
    // Is there a 'h' in leftoverChars?
    if (leftoverChars.includes(name[0])) {
      const foundIndex = leftoverChars.indexOf(name[0])
      // If yes, assign leftoverChars to matchedChars.slice(matchedChars.indexOf('h' + 1))
      leftoverChars = leftoverChars.slice(foundIndex + 1)
      name = name.slice(1)
    } else {
      // If not, return false
      return false
    }
  }

  return true
}
