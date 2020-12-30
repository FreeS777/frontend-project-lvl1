/* eslint-disable no-restricted-syntax */
import gameProcess, { randomNumber } from '../src/index.js';

export const isRulesProgressGame = () => console.log('What number is missing in the progression?');

export const getRandomProgression = () => {
  let count = 0;
  const progressionLength = randomNumber(5, 10);
  let startValue = randomNumber();
  const randomProgression = [startValue];
  const progressionStep = randomNumber(1, 9);
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
  for (const value of progression) {
    if (value === hiddenElement) {
      resultArr.push('..');
    } else {
      resultArr.push(value);
    }
  }
  resultArr = resultArr.join(' ');
  return resultArr;
};

const generateQuestionAnswer = () => {
  const questionProgression = getRandomProgression();
  const hiddenIndex = randomNumber(0, questionProgression.length - 1);
  const questionGame = getProgressionQuestion(questionProgression, hiddenIndex);
  const question = `Question: ${questionGame}\nYour answer: `;
  const correctAnswer = String(questionProgression[hiddenIndex]);
  return [question, correctAnswer];
};

export default () => gameProcess(generateQuestionAnswer);
