import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

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

const calcGame = () => {
  const getRandomOperation = () => {
    const operations = ['+', '-', '*'];
    return operations[Math.floor(Math.random() * operations.length)];
  };

  const leftOperand = getRandomNumber();
  const rightOperand = getRandomNumber();

  const operation = getRandomOperation();

  const correctAnswer = calc(leftOperand, rightOperand, operation);
  const question = `${leftOperand} ${operation} ${rightOperand}`;

  return [question, String(correctAnswer)];
};

const rule = 'What is the result of the expression?';

export default () => {
  gameEngine(calcGame, rule);
};
