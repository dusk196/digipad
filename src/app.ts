import { add, substract, getRandomID } from './math'

const x = 20
const y = 10

console.log(`${x} + ${y} = ${add(x, y)}`)
console.log(`${x} - ${y} = ${substract(x, y)}`)
console.log(`${getRandomID()}`)

export default { add, substract }
