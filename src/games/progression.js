import gameProcess from '../index.js';
import { getRandomNumber, getRandomProgression } from '../utils.js';

export const getProgressionQuestion = (progression, hiddenIndex) => {
  const hiddenElement = progression[hiddenIndex];
  let resultArr = [];
  progression.forEach((value) => {
    if (value === hiddenElement) {
      resultArr.push('..');
    } else {
      resultArr.push(value);
    }
  });
  resultArr = resultArr.join(' ');
  return resultArr;
};

const generateQuestionAnswer = () => {
  const questionProgression = getRandomProgression();
  const hiddenIndex = getRandomNumber(0, questionProgression.length - 1);
  const questionGame = getProgressionQuestion(questionProgression, hiddenIndex);
  const question = `Question: ${questionGame}\nYour answer: `;
  const correctAnswer = String(questionProgression[hiddenIndex]);
  return [question, correctAnswer];
};

export default () => {
  console.log('What number is missing in the progression?');
  gameProcess(generateQuestionAnswer);
};
