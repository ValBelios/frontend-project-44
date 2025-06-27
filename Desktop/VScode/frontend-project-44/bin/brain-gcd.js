#!/usr/bin/env node

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
