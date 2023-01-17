import evenGame from './games/even-game.js';
import calcGame from './games/calc-game.js';
import gcdGame from './games/gcd-game.js';
import progressionGame from './games/progression-game.js';

const gameSelector = {
  even: (userName) => evenGame(userName),
  calc: (userName) => calcGame(userName),
  gcd: (userName) => gcdGame(userName),
  progression: (userName) => progressionGame(userName),
};

export default (userName, gameID) => {
  gameSelector[gameID](userName);
};
