import readlineSync from 'readline-sync';
import { userName } from './cli';

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const rules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const brainEvenGame = () => {
  let counter = 0;
  while (counter < 3) {
    const questionNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isEven(questionNumber) === userAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}`;
};
