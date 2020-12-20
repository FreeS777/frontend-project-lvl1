import readlineSync from 'readline-sync';
import {
  randomNumber, isWrongAnswer, isCorrectAnswer, congratulations,
} from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2, a = Math.sqrt(num); i <= a; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  let count = 0;
  while (count < 3) {
    const questionNumber = randomNumber();
    const userAnswer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
    const CorrectAnswer = isPrime(questionNumber);
    if (userAnswer === CorrectAnswer) {
      count += 1;
      isCorrectAnswer();
    } else {
      isWrongAnswer(userAnswer, CorrectAnswer);
      return;
    }
  }
  congratulations();
};
