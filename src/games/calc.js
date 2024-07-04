import getRandomNumber from "../../src/utils.js";
import gameEngine from "../engine.js";

const rules = `What is the result of the expression?`;

const actions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
};

const calc = (firstNumber, secondNumber, action) => {
    if (actions[action]) {
        return actions[action](firstNumber, secondNumber);
    } else {
        throw new Error(`Unknown action: ${action}`);
    }
};

const getQuesionAndAnswer = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const action = Object.keys(actions)[getRandomNumber(0, 2)];
    const question = `Question: ${firstNumber} ${action} ${secondNumber}`;
    const answer = calc(firstNumber, secondNumber, action);
    return [question, answer.toString()];
};
export default () => gameEngine(getQuesionAndAnswer, rules);