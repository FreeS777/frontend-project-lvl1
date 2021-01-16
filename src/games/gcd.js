import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num1 === 0) return num2;
  return gcd(num2 % num1, num1);
};

const generateQuestionAnswer = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `Question: ${numberOne} ${numberTwo}\nYour answer: `;
  const correctAnswer = String(gcd(numberOne, numberTwo));
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, rules);
};
