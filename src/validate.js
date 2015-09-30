
//import{isNil, reduce} from 'ramda'
import {isNil} from './lib/isnil.js'
import {reduce} from './lib/reduce.js'

export * from './string'
export * from './util'
export * from './boolean'


export const validate = (...fn) => (value) => !isNil(value) ? reduce((acc, x) => acc && x(value), true, fn): false


//export function mymodule() {}

