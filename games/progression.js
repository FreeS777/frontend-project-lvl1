/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import {
  randomNumber, isWrongAnswer, isCorrectAnswer, congratulations,
} from '../src/index.js';

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

export const getHiddenProgression = (progression, hiddenIndex) => {
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

export default () => {
  let count = 0;
  while (count < 3) {
    const questionProgression = getRandomProgression();
    const hiddenIndex = randomNumber(0, questionProgression.length - 1);
    const questionGame = getHiddenProgression(questionProgression, hiddenIndex);
    const userAnswer = readlineSync.question(`Question: ${questionGame}\nYour answer: `);
    const CorrectAnswer = questionProgression[hiddenIndex];
    if (userAnswer === String(CorrectAnswer)) {
      count += 1;
      isCorrectAnswer();
    } else {
      isWrongAnswer(userAnswer, CorrectAnswer);
      return;
    }
  }
  congratulations();
};
