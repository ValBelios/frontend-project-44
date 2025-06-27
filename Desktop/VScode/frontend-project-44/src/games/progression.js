// src/games/progression.js

import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/utils.js'; // Правильный путь к utils.js

const generateProgression = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(2, 5);
  const length = getRandomInt(5, 10);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const runProgressionGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const progression = generateProgression();
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  console.log('What number is missing in the progression?');
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  // Continue game logic...
};

export { runProgressionGame };
