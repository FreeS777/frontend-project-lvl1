import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let count = 2; count <= Math.sqrt(num); count += 1) {
    if (num % count === 0) return false;
  }
  return true;
};

const generateQuestionAnswer = () => {
  const questionNumber = getRandomNumber();
  const question = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, rules);
};
