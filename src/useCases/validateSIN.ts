import { calculateLuhnAlgorithm } from '@/useCases/luhnAlgorithm'

export function validateSINFormat(sin: string): boolean {
  return /^\d{9}$/.test(sin)
}

export function validateSIN(sin: string): boolean {
  return validateSINFormat(sin) && calculateLuhnAlgorithm(sin)
}
