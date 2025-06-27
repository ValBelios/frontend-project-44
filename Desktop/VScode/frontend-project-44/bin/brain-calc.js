#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateRandomNumber, getRandomOperator, calculate } from '../src/games/calc.js';

const description = 'What is the result of the expression?';

const generateQuestion = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default () => runGame(description, generateQuestion);
