import readlineSync from 'readline-sync';

export const sayWelcome = () => console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');
export const sayHi = () => console.log(`Hello, ${userName}!`);
