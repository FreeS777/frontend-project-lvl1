import readlineSync from 'readline-sync';

const numberOfRounds = 3;
const getUserName = () => readlineSync.question('May I have your name? ');

export default (getQuesionAndAnswer, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = getQuesionAndAnswer();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
