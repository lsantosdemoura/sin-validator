export function calculateLuhnAlgorithm(sin: string): boolean {
  let sum = 0
  for (let i = sin.length - 1; i >= 0; i--) {
    let digit = parseInt(sin[i])
    if (i % 2 === 1) digit *= 2
    if (digit > 9) digit -= 9
    sum += digit
  }
  return sum % 10 === 0
}
