import evenGame from './games/even-game.js';

const gameSelector = {
  even: (userName) => evenGame(userName),
};

export default (userName, gameID) => {
  gameSelector[gameID](userName);
};
