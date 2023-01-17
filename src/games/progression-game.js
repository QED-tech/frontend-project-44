import readlineSync from 'readline-sync';

export default (name) => {
  console.log('What number is missing in the progression?');

  const GAME_ROUNDS = 3;

  const getRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

  const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === +userAnswer;

  const generateProgression = () => {
    const progressionLenght = getRandomNumber(10, 5);
    const emptyIndexInProgression = getRandomNumber(progressionLenght, 0);
    const progressionIncreaseFactor = getRandomNumber(15, 1);
    let initialNumProgression = getRandomNumber(100, 0);

    const progression = [
      initialNumProgression,
    ];

    for (let i = 0; i < progressionLenght - 1; i += 1) {
      const nextNum = initialNumProgression + progressionIncreaseFactor;
      progression.push(initialNumProgression + progressionIncreaseFactor);
      initialNumProgression = nextNum;
    }

    progression[emptyIndexInProgression] = '..';

    return [progression, progressionIncreaseFactor];
  };

  const game = () => {
    for (let i = 0; i < GAME_ROUNDS; i += 1) {
      const [progression, correctAnswer] = generateProgression();

      console.log(`Question: ${progression.join(' ')}`);
      const userAnswer = readlineSync.question('Your answer: ');

      const isCorrect = isCorrectAnswer(correctAnswer, userAnswer);

      const roundMessage = isCorrect
        ? 'Correct!'
        : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

      if (!isCorrect) {
        console.log(roundMessage);
        console.log(`Let's try again, ${name}!`);

        return;
      }

      console.log(roundMessage);
    }

    console.log(`Congratulations, ${name}!`);
  };

  game();
};
