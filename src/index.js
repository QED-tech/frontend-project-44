import evenGame from './games/even-game.js';
import calcGame from './games/calc-game.js';
import gcdGame from './games/gcd-game.js';
import progressionGame from './games/progression-game.js';
import primeGame from './games/prime-game.js';

const gameSelector = {
  even: () => evenGame(),
  calc: () => calcGame(),
  gcd: () => gcdGame(),
  progression: () => progressionGame(),
  prime: () => primeGame(),
};

const GAME_ROUNDS = 3;

export default (userName, gameID) => {
  const game = gameSelector[gameID]();

  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const gameResult = game();

    if (gameResult === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
