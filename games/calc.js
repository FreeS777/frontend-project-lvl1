import readlineSync from 'readline-sync';
import {
  randomNumber, isWrongAnswer, isCorrectAnswer, congratulations,
} from '../src/index.js';

const getCalcCorrectAnswer = (firstValue, secondValue, symbol) => {
  let result = 0;
  if (symbol === '+') {
    result = firstValue + secondValue;
  } else if (symbol === '-') {
    result = firstValue - secondValue;
  } else {
    result = firstValue * secondValue;
  }
  return result;
};

const randomSymbolCalc = () => {
  let symbol = '';
  const random = Math.random();
  if (random <= 0.33) {
    symbol = '+';
  } else if (random > 0.33 && random <= 0.66) {
    symbol = '-';
  } else {
    symbol = '*';
  }
  return symbol;
};

export default () => {
  let counter = 0;
  while (counter < 3) {
    const randomNumberOne = randomNumber();
    const randomNumberTwo = randomNumber();
    const symbol = randomSymbolCalc();
    const userAnswer = readlineSync.question(`Question: ${randomNumberOne} ${symbol} ${randomNumberTwo}\nYour answer: `);
    const correctAnswer = getCalcCorrectAnswer(randomNumberOne, randomNumberTwo, symbol);

    if (String(correctAnswer) === userAnswer) {
      counter += 1;
      isCorrectAnswer();
    } else {
      isWrongAnswer(userAnswer, correctAnswer);
      return;
    }
  }
  congratulations();
};
