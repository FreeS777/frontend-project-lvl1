import gameProcess, { randomNumber } from '../src/index.js';

export const isRulesPrimeGame = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2, a = Math.sqrt(num); i <= a; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const generateQuestionAnswer = () => {
  const questionNumber = randomNumber();
  const question = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isPrime(questionNumber);
  return [question, correctAnswer];
};

export default () => gameProcess(generateQuestionAnswer);
