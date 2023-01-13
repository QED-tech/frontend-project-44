#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetingUser from '../src/cli.js';

const name = greetingUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const GAME_ROUNDS = 3;

const getRandomNumber = () => Math.round(Math.random() * 20);
const isEven = (num) => num % 2 === 0;
const isCorrectAnswer = (currentNum, userAnswer) => (isEven(currentNum) && userAnswer === 'yes')
  || (!isEven(currentNum) && userAnswer === 'no');

const getWrongAnswerMsg = (userAnswer) => (userAnswer === 'yes'
  ? "'yes' is wrong answer ;(. Correct answer was 'no'."
  : "'no' is wrong answer ;(. Correct answer was 'yes'.");

const evenGame = () => {
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = isCorrectAnswer(randomNumber, userAnswer);
    const roundMessage = isCorrect ? 'Correct!' : getWrongAnswerMsg(userAnswer);

    if (!isCorrect) {
      console.log(roundMessage);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log(roundMessage);
  }

  console.log(`Congratulations, ${name}!`);
};

evenGame();
