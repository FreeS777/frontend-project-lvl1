import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateQuestionAnswer = () => {
  const questionNumber = getRandomNumber();
  const question = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, rules);
};
