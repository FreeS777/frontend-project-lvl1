import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

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

const generateQuestionAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `Question: ${numberOne} ${numberTwo}\nYour answer: `;
  const correctAnswer = String(getGcdCorrectAnswer(numberOne, numberTwo));
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, 'Find the greatest common divisor of given numbers.');
};
