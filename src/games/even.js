import readlineSync from "readline-sync";
import getRandomNumber from "../../src/utils.js";

const rules = `Answer "yes" if the number is even, otherwise answer "no".`;
const numberOfRounds = 3;
const isEven = (num) => num % 2 === 0;
const getUserName = () => readlineSync.question("May I have your name? ");

export default () => {
  console.log(`Welcome to the Brain Games!`);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let count = 0;
  while (count < numberOfRounds) {
    const randomNumber = getRandomNumber();
    const question = `Question: ${randomNumber}`;
    const answer = isEven(randomNumber) ? "yes" : "no";
    console.log(question);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === answer) {
      console.log("Correct!");
      count += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
