// like lodash and all

import { v4 as uuidv4 } from 'uuid'

/**
 * A simple function  to generate random text based on parameters
 * @params length: number
 * @returns string (some random text)
 */
// export function generateRandomText (length: number): string {
//   const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
//   let result = ''
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length)
//     result += charset.charAt(randomIndex)
//   }
//   return result
// }

/**
 * A simple function  to generate random UUIDs
 * @returns string (some random UUID)
 */
export function generateRandomUUID (): string {
  return uuidv4()
}
