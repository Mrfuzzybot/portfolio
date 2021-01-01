import { debounce } from 'lodash'

/* Попробовать из функции сделать декоратор */
export function Debounce(ms) {
  return function(target: any, key: any, descriptor: any) {
    const oldFunc = descriptor.value
    const newFunc = debounce(oldFunc, ms)
    descriptor.value = function() {
      return newFunc.apply(this, arguments)
    }
  }
}
