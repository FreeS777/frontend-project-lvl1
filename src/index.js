import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserNameAndGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const userName = getUserNameAndGreeting();

export default (generateQuestionAnswer) => {
  let counter = 0;
  while (counter < 3) {
    const [question, correctAnswer] = generateQuestionAnswer();
    const userAnswer = readlineSync.question(question);
    if (userAnswer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
