#!/usr/bin/env node
import { getRandomNumber } from '../utils.js'
import run from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const minRange = 0
const maxRange = 100

const isEven = (number) => number % 2 === 0

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange)
  const question = number.toString()
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default () => run(description, generateRound)
