import gameProcess, { randomNumber } from '../src/index.js';

export const isRulesEvenGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateQuestionAnswer = () => {
  const questionNumber = randomNumber();
  const question = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isEven(questionNumber);
  return [question, correctAnswer];
};

export default () => gameProcess(generateQuestionAnswer);
