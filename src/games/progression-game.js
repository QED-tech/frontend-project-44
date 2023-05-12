import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const progressionGame = () => {
  const progressionLenght = getRandomNumber(10, 5);
  const hiddenProgressionIndex = getRandomNumber(progressionLenght - 1, 0);
  const progressionIncreaseFactor = getRandomNumber(15, 1);
  let initialNumProgression = getRandomNumber(100, 0);

  const progression = [initialNumProgression];

  for (let i = 0; i < progressionLenght - 1; i += 1) {
    const nextNum = initialNumProgression + progressionIncreaseFactor;
    progression.push(nextNum);
    initialNumProgression = nextNum;
  }

  const correctAnswer = progression[hiddenProgressionIndex];
  progression[hiddenProgressionIndex] = '..';

  return [progression.join(' '), String(correctAnswer)];
};

const rule = 'What number is missing in the progression?';

export default () => {
  gameEngine(progressionGame, rule);
};
