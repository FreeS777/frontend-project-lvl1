import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const getQuestion = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const missingNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression, missingNumber];
};

const getQuesionAndAnswer = () => {
  const [progression, missingNumber] = getQuestion();
  const question = `Question: ${progression.join(' ')}`;
  const answer = String(missingNumber);
  return [question, answer];
};

export default () => gameEngine(getQuesionAndAnswer, rules);
