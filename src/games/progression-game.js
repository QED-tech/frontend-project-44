import readlineSync from 'readline-sync';

const getRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === +userAnswer;

const generateProgression = () => {
  const progressionLenght = getRandomNumber(10, 5);
  const hiddenProgressionIndex = getRandomNumber(progressionLenght, 0);
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

  return [progression, correctAnswer];
};

export default () => {
  console.log('What number is missing in the progression?');

  return () => {
    const [progression, correctAnswer] = generateProgression();

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = isCorrectAnswer(correctAnswer, userAnswer);

    const roundMessage = isCorrect
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

    console.log(roundMessage);

    return isCorrect;
  };
};
