import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const evenGame = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomNumber();

  return [question, isEven(question) ? 'yes' : 'no'];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  gameEngine(evenGame, rule);
};
