import getRandomNumber from "../utils.js";
import gameEngine from "../engine.js";

const rules = `Find the greatest common divisor of given numbers.`;

const getGcd = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        return firstNumber;
    } else {
        return getGcd(secondNumber, firstNumber % secondNumber);
    }
};

const getQuesionAndAnswer = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const question = `Question: ${firstNumber} ${secondNumber}`;
    const answer = getGcd(firstNumber, secondNumber);
    return [question, answer.toString()];
};

export default () => gameEngine(getQuesionAndAnswer, rules);
