import readlineSync from 'readline-sync';

const calc = (leftOperand, rightOperand, operation) => {
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

export default () => {
  console.log('What is the result of the expression?');

  return () => {
    const getRandomNumber = () => Math.round(Math.random() * 10);

    const getRandomOperation = () => {
      const operations = ['+', '-', '*'];
      return operations[Math.floor(Math.random() * operations.length)];
    };

    const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === +userAnswer;

    const leftOperand = getRandomNumber();
    const rightOperand = getRandomNumber();

    const operation = getRandomOperation();

    console.log(`Question: ${leftOperand} ${operation} ${rightOperand}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calc(leftOperand, rightOperand, operation);
    const isCorrect = isCorrectAnswer(correctAnswer, userAnswer);

    const roundMessage = isCorrect
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

    console.log(roundMessage);

    return isCorrect;
  };
};
