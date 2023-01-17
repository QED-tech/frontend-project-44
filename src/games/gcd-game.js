import readlineSync from 'readline-sync';

const gcd = (j, z) => {
  let a = j;
  let b = z;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');

  return () => {
    const getRandomNumber = () => Math.round(Math.random() * 20);

    const getCorrectAnswer = (a, b) => gcd(a, b);

    const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === +userAnswer;

    const getWrongAnswerMsg = (correctAnswer, userAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

    const randomNumberA = getRandomNumber();
    const randomNumberB = getRandomNumber();

    console.log(`Question: ${randomNumberA} ${randomNumberB}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomNumberA, randomNumberB);

    const isCorrect = isCorrectAnswer(correctAnswer, userAnswer);

    const roundMessage = isCorrect
      ? 'Correct!'
      : getWrongAnswerMsg(correctAnswer, userAnswer);

    console.log(roundMessage);

    return isCorrect;
  };
};
