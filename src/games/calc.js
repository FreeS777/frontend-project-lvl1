import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Whate is the result of the expression?';
const calculate = (firstValue, secondValue, symbol) => {
  let result;
  switch (symbol) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
      throw new Error(`Unknown operator: '${symbol}'!`);
  }
  return result;
};

const getRandomOperation = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, operators.length - 1)];
};

const generateQuestionAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const operator = getRandomOperation();
  const question = `Question: ${numberOne} ${operator} ${numberTwo}\nYour answer: `;
  const correctAnswer = String(calculate(numberOne, numberTwo, operator));
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, rules);
};
