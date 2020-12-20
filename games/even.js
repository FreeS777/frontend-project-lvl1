import readlineSync from 'readline-sync';
import {
  randomNumber, congratulations, isWrongAnswer, isCorrectAnswer,
} from '../src/index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  let counter = 0;
  while (counter < 3) {
    const questionNumber = randomNumber();
    const correctAnswer = isEven(questionNumber);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      counter += 1;
      isCorrectAnswer();
    } else {
      isWrongAnswer(userAnswer, correctAnswer);
      return;
    }
  }
  congratulations();
};
