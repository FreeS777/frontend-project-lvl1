import readlineSync from 'readline-sync';
import letsBegin from './cli.js';

const userName = letsBegin();

export default (generateQuestionAnswer) => {
  let counter = 0;
  while (counter < 3) {
    const [question, correctAnswer] = generateQuestionAnswer();
    const userAnswer = readlineSync.question(question);
    if (userAnswer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
