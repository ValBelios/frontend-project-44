// bin/brain-prime.js

import readlineSync from 'readline-sync';
import { isPrime } from '../src/games/prime.js'; // Импортируем функцию для проверки на простоту

const runPrimeGame = () => {
  console.log('Welcome to the Brain Prime game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const generateQuestion = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
    const correctAnswer = isPrime(number) ? 'yes' : 'no'; // Проверяем, является ли число простым
    return { question: number, correctAnswer };
  };

  const playRound = () => {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return true;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  };

  let roundsWon = 0;
  while (roundsWon < 3) { // Проводим три раунда игры
    if (playRound()) {
      roundsWon += 1;
    } else {
      roundsWon = 0; // Если пользователь ошибся, обнуляем счётчик выигранных раундов
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runPrimeGame;

// Запускаем игру
runPrimeGame();
