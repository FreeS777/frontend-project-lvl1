import getRandomNumber from "../../src/utils.js";
import gameEngine from "../index.js";

const rules = `Answer "yes" if the number is even, otherwise answer "no".`;
const isEven = (num) => num % 2 === 0;

const getQuesionAndAnswer = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;
  const answer = isEven(randomNumber)? "yes" : "no";
  return [question, answer];
};

export default () => gameEngine(getQuesionAndAnswer, rules);
