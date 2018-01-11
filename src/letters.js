import { getRandomIntegerBetween } from './util'

const A = 65
const Z = 91

console.log("I'm here to clutter your logs, dawg!")

export const getRandomLetter = () =>
  String.fromCharCode(getRandomIntegerBetween(A, Z))
