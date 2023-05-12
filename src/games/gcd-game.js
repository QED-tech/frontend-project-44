import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gcd = (j, z) => {
  let a = j;
  let b = z;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

const gcdGame = () => {
  const getCorrectAnswer = (a, b) => gcd(a, b);

  const randomNumberA = getRandomNumber();
  const randomNumberB = getRandomNumber();

  const question = `${randomNumberA} ${randomNumberB}`;

  const correctAnswer = getCorrectAnswer(randomNumberA, randomNumberB);

  return [question, String(correctAnswer)];
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => {
  gameEngine(gcdGame, rule);
};
