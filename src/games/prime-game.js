import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number >= 0 && number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  gameEngine(primeGame, rule);
};
