import gameProcess, { randomNumber } from '../src/index.js';

export const isRulesCalcGame = () => console.log('Whate is the result of the expression?');

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
const generateQuestionAnswer =() => {
  const numberOne = randomNumber();
  const numberTwo = randomNumber();
  const symbol = randomSymbolCalc();
  const question = `Question: ${numberOne} ${symbol} ${numberTwo}\nYour answer: `;
  const correctAnswer = String(getCalcCorrectAnswer(numberOne, numberTwo, symbol));
  return [question, correctAnswer];
};

export default () => gameProcess(generateQuestionAnswer);
