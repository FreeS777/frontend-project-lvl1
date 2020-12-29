import readlineSync from 'readline-sync';
import { userName } from './cli.js';

export const randomNumber = (minValue = 1, maxValue = 101) => {
  const rand = minValue + Math.random() * (maxValue + 1 - minValue);
  return Math.floor(rand);
};

export const isRulesEvenGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const isRulesCalcGame = () => console.log('Whate is the result of the expression?');
export const isRulesGcdGame = () => console.log('Find the greatest common divisor of given numbers.');
export const isRulesProgressGame = () => console.log('What number is missing in the progression?');
export const isRulesPrimeGame = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const isCorrectAnswer = () => console.log('Correct!');
export const isWrongAnswer = (userAnswer, correctAnswer) => {
  const message = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
  return console.log(message);
};
export const congratulations = () => console.log(`Congratulations, ${userName}!`);

export default (generateQuestionAnswer) => {
  let counter = 0;
  while (counter < 3) {
    const [question, correctAnswer] = generateQuestionAnswer();
    const userAnswer = readlineSync.question(question);
    if (userAnswer === correctAnswer) {
      counter += 1;
      isCorrectAnswer();
    } else {
      isWrongAnswer(userAnswer, correctAnswer);
      return;
    }
  }
  congratulations();
};
