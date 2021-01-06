import gameProcess from '../index.js';
import getRandomNumber, { isPrime } from '../utils.js';

const generateQuestionAnswer = () => {
  const questionNumber = getRandomNumber();
  const question = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameProcess(generateQuestionAnswer);
};
