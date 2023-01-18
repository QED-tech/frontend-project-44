import readlineSync from 'readline-sync';

const getRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const isPrime = (number) => {
  if (number >= 0 && number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  return () => {
    const randomNum = getRandomNumber(20, 0);

    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

    const isCorrect = isCorrectAnswer(correctAnswer, userAnswer);

    const roundMessage = isCorrect
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

    console.log(roundMessage);

    return isCorrect;
  };
};
