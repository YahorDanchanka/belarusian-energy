import { pull } from 'lodash'
import { InteractEvent } from '@interactjs/types'

/** From https://stackoverflow.com/a/37074350/15284848 */
export function knock<T>(array: T[], value: T) {
  if (array.length === pull(array, value).length) {
    array.push(value)
  }

  return array
}

export function dragMoveListener(event: InteractEvent): void {
  const target: HTMLElement = <HTMLElement>event.target

  const x: number = (parseFloat(target.getAttribute('data-x')!) || 0) + event.dx
  const y: number = (parseFloat(target.getAttribute('data-y')!) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x.toString())
  target.setAttribute('data-y', y.toString())
}
