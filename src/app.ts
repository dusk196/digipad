import { add, substract, getRandomID } from './math'
import { init } from './core'

const x = 20
const y = 10

console.log(`${x} + ${y} = ${add(x, y)}`)
console.log(`${x} - ${y} = ${substract(x, y)}`)
console.log(`${getRandomID()}`)

init({ id: 'lol' })

export default { add, substract, init }
