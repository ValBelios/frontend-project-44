const generateRandomNumber = () => Math.floor(Math.random() * 100);

const playEvenGame = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = generateRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

greetPlayer();
playEvenGame();

// Калькулятор


import readlineSync from 'readline-sync';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
};

const playCalcGame = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const operator = generateRandomOperator();
    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = calculateExpression(num1, operator, num2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

greetPlayer();
playCalcGame();

//Игра "НОД"


import readlineSync from 'readline-sync';

// Функция для нахождения наибольшего общего делителя
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для игры "Наибольший общий делитель"
const playGCDGame = () => {
  console.log('Welcome to the Brain GCD game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  // Максимальное значение числа для генерации
  const maxNumber = 100;
  
  // Количество раундов игры
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    // Генерация двух случайных чисел
    const num1 = getRandomNumber(1, maxNumber);
    const num2 = getRandomNumber(1, maxNumber);
    console.log(`Question: ${num1} ${num2}`);

    // Пользовательский ответ
    const userAnswer = readlineSync.question('Your answer: ');

    // Правильный ответ
    const correctAnswer = gcd(num1, num2).toString();

    // Проверка ответа пользователя
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

// Запуск игры
playGCDGame();



// src/games/progression.js
import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils.js';

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
