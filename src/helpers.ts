import { pull } from 'lodash'

/** From https://stackoverflow.com/a/37074350/15284848 */
export function knock<T>(array: T[], value: T) {
  if (array.length === pull(array, value).length) {
    array.push(value)
  }

  return array
}
