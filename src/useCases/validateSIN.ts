export function validateSINFormat(sin: string): boolean {
  return /^\d{9}$/.test(sin)
}

export function calculateChecksum(sin: string): boolean {
  let sum = 0
  for (let i = 0; i < sin.length; i++) {
    let digit = parseInt(sin[i])
    if (i % 2 === 1) digit *= 2
    if (digit > 9) digit -= 9
    sum += digit
  }
  return sum % 10 === 0
}

export function validateSIN(sin: string): boolean {
  return validateSINFormat(sin) && calculateChecksum(sin)
}
