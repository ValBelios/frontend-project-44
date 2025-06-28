#!/usr/bin/env node
import { getRandomNumber } from '../utils.js'
import run from '../index.js'
const description = 'Find the greatest common divisor of given numbers.'
const minRange = 0
const maxRange = 10
const getGCD = (x, y) => (y === 0 ? x : getGCD(y, x % y))
const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange)
  const number2 = getRandomNumber(minRange, maxRange)
  const question = `${number1} ${number2}`
  const correctAnswer = getGCD(number1, number2).toString()
  return [question, correctAnswer]
}
export default () => {
  run(description, generateRound)
}