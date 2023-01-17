import readlineSync from 'readline-sync';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  return () => {
    const getRandomNumber = () => Math.round(Math.random() * 20);

    const isEven = (num) => num % 2 === 0;

    const isCorrectAnswer = (currentNum, userAnswer) => (isEven(currentNum) && userAnswer === 'yes')
      || (!isEven(currentNum) && userAnswer === 'no');

    const getWrongAnswerMsg = (userAnswer) => (userAnswer === 'yes'
      ? `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`
      : `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);

    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrect = isCorrectAnswer(randomNumber, userAnswer);
    const roundMessage = isCorrect ? 'Correct!' : getWrongAnswerMsg(userAnswer);
    console.log(roundMessage);

    return isCorrect;
  };
};
