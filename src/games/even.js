import gameProcess from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const generateQuestionAnswer = () => {
  const questionNumber = getRandomNumber();
  const question = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameProcess(generateQuestionAnswer);
};
