import { cloneDeep } from 'lodash-es'
import { fromEvent, scan } from 'rxjs'

fromEvent(document, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => { console.log(`Clicked ${count} times`) })

export function add (x: number, y: number): number {
  const a = cloneDeep(x)
  console.info(a)
  return x + y
}

export function substract (x: number, y: number): number {
  return x - y
}
