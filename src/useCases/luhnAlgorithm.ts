export function calculateLuhnAlgorithm(code: string): boolean {
  let sum = 0
  let isSecondDigit = false
  for (let i = code.length - 1; i >= 0; i--) {
    let digit = parseInt(code[i])
    if (isSecondDigit) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    isSecondDigit = !isSecondDigit
    sum += digit
  }
  return sum % 10 === 0
}
