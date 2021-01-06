import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomProgression = () => {
  let count = 0;
  const progressionLength = getRandomNumber(5, 10);
  let startValue = getRandomNumber();
  const randomProgression = [startValue];
  const progressionStep = getRandomNumber(1, 9);
  while (count < progressionLength - 1) {
    count += 1;
    startValue += progressionStep;
    randomProgression.push(startValue);
  }
  return randomProgression;
};

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
