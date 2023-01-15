import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const GAME_ROUNDS = 3;

  const getRandomNumber = () => Math.round(Math.random() * 10);

  const getRandomOperation = () => {
    const operations = ['+', '-', '*'];
    return operations[Math.round(Math.random() * operations.length)];
  };

  const getCorrectAnswer = (leftOperand, rightOperand, operation) => {
    switch (operation) {
      case '+': {
        return leftOperand + rightOperand;
      }

      case '-': {
        return leftOperand - rightOperand;
      }

      case '*': {
        return leftOperand * rightOperand;
      }

      default: {
        return null;
      }
    }
  };

  const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === +userAnswer;

  const calcGame = () => {
    for (let i = 0; i < GAME_ROUNDS; i += 1) {
      const leftOperand = getRandomNumber();
      const rightOperand = getRandomNumber();

      const operation = getRandomOperation();

      console.log(`Question: ${leftOperand} ${operation} ${rightOperand}`);
      const userAnswer = readlineSync.question('Your answer: ');

      const correctAnswer = getCorrectAnswer(
        leftOperand,
        rightOperand,
        operation,
      );
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

  calcGame();
};
