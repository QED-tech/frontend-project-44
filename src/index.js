import evenGame from './games/even-game.js';
import calcGame from './games/calc-game.js';
import gcdGame from './games/gcd-game.js';

const gameSelector = {
  even: (userName) => evenGame(userName),
  calc: (userName) => calcGame(userName),
  gcd: (userName) => gcdGame(userName),
};

export default (userName, gameID) => {
  gameSelector[gameID](userName);
};
