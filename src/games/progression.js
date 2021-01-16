import gameProcess from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';
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

export const getProgressionWithHiddenElement = (progression, hiddenIndex) => {
  const hiddenElement = progression[hiddenIndex];
  let result = [];
  progression.forEach((value) => {
    if (value === hiddenElement) {
      result.push('..');
    } else {
      result.push(value);
    }
  });
  result = result.join(' ');
  return result;
};

const generateQuestionAnswer = () => {
  const questionProgression = getRandomProgression();
  const hiddenIndex = getRandomNumber(0, questionProgression.length - 1);
  const questionGame = getProgressionWithHiddenElement(questionProgression, hiddenIndex);
  const question = `Question: ${questionGame}\nYour answer: `;
  const correctAnswer = String(questionProgression[hiddenIndex]);
  return [question, correctAnswer];
};

export default () => {
  gameProcess(generateQuestionAnswer, rules);
};
