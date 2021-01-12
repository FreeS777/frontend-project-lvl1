import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const getOperation = (firstValue, secondValue, symbol) => {
  let result;
  switch (symbol) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    default:
      result = firstValue * secondValue;
      break;
  }
  return result;
};

const getRandomOperation = () => {
  const arr = ['+', '-', '*'];
  return arr[getRandomNumber(0, arr.length - 1)];
};

const generateQuestionAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const symbol = getRandomOperation();
  const question = `Question: ${numberOne} ${symbol} ${numberTwo}\nYour answer: `;
  const correctAnswer = String(getOperation(numberOne, numberTwo, symbol));
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, 'Whate is the result of the expression?');
};
