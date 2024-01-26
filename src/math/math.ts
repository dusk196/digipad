// import { cloneDeep } from 'lodash-es'
// import { fromEvent, scan } from 'rxjs'

import { v4 as uuidv4 } from 'uuid'

// fromEvent(document, 'click')
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => { console.log(`Clicked ${count} times`) })

export function add (x: number, y: number): number {
  // const a = cloneDeep(x)
  // console.log('Cloned', a)
  return x + y
}

export function substract (x: number, y: number): number {
  return x - y
}

// like lodash and all

// function generateRandomText (length: number): string {
//   const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
//   let result = ''
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length)
//     result += charset.charAt(randomIndex)
//   }
//   return result
// }

export function getRandomID (): string {
  return uuidv4()
}
