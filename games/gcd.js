import readlineSync from 'readline-sync';
import {
  randomNumber, isWrongAnswer, isCorrectAnswer, congratulations,
} from '../src/index.js';

const getGcdCorrectAnswer = (numberOne, numberTwo) => {
  let result = 0;
  let tempOne = numberOne;
  let tempTwo = numberTwo;
  while (tempOne !== 0 && tempTwo !== 0) {
    if (tempOne > tempTwo) {
      tempOne %= tempTwo;
    } else {
      tempTwo %= tempOne;
    }
  }
  result = tempOne + tempTwo;
  return result;
};

export default () => {
  let counter = 0;
  while (counter < 3) {
    const numberOne = randomNumber();
    const numberTwo = randomNumber();
    const userAnswer = readlineSync.question(`Question: ${numberOne} ${numberTwo}\nYour answer: `);
    const correctAnswer = getGcdCorrectAnswer(numberOne, numberTwo);
    if (Number(userAnswer) === correctAnswer) {
      counter += 1;
      isCorrectAnswer();
    } else {
      isWrongAnswer(userAnswer, correctAnswer);
      return;
    }
  }
  congratulations();
};
