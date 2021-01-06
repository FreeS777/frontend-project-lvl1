import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const getOperation = (firstValue, secondValue, symbol) => {
  let result;
  if (symbol === '+') {
    result = firstValue + secondValue;
  } else if (symbol === '-') {
    result = firstValue - secondValue;
  } else {
    result = firstValue * secondValue;
  }
  return result;
};

const getRandomOperation = () => {
  const arr = ['+', '-', '*'];
  const randomSymbol = Math.floor(Math.random() * arr.length);
  return arr[randomSymbol];
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
  console.log('Whate is the result of the expression?');
  gameProcess(generateQuestionAnswer);
};
