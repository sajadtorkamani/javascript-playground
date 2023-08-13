export function alanAnnoyingKid(input: string): string {
  // 1. I don't think you `<past-tense-verb>` `<subject>`.

  const words = input.split(' ')
  const pastTenseVerb = words[2]
  const subject = words.slice(3).join(' ').replace('.', '')
  const presentTenseVerb = pastTenseVerb.replace('ed', '')

  const firstPart = `I don't think you ${pastTenseVerb} ${subject} today`
  const secondPart = `I think you didn't ${presentTenseVerb} at all!`

  return `${firstPart}, ${secondPart}`
}
