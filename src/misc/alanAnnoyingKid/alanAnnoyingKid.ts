export function alanAnnoyingKid(statement: string): string {
  return statement.includes("didn't")
    ? negateNegativeStatement(statement)
    : negatePositiveStatement(statement)
}

function negatePositiveStatement(statement: string) {
  const words = statement.split(' ')
  const pastTenseVerb = words[2]
  const subject = words.slice(3).join(' ').replace('.', '')
  const presentTenseVerb = pastTenseVerb.replace('ed', '')

  const firstPart = `I don't think you ${pastTenseVerb} ${subject} today`
  const secondPart = `I think you didn't ${presentTenseVerb} at all`

  return `${firstPart}, ${secondPart}!`
}

export function negateNegativeStatement(statement: string) {
  const words = statement.split(' ')
  const action = words.slice(2).join(' ').replace('.', '')
  const verb = words[3]

  const firstPart = `I don't think you ${action} today`
  const secondPart = `I think you did ${verb} it`

  return `${firstPart}, ${secondPart}!`
}
