import evenGame from './games/even-game.js';
import calcGame from './games/calc-game.js';

const gameSelector = {
  even: (userName) => evenGame(userName),
  calc: (userName) => calcGame(userName),
};

export default (userName, gameID) => {
  gameSelector[gameID](userName);
};
