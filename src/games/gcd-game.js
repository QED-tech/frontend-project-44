import readlineSync from 'readline-sync'

export default name => {
  console.log('Find the greatest common divisor of given numbers.')

  const GAME_ROUNDS = 3

  const getRandomNumber = () => Math.round(Math.random() * 20)

  const gcd = (a, b) => {
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a = a % b
      } else {
        b = b % a
      }
    }

    return a + b
  }

  const getCorrectAnswer = (a, b) => {
    return gcd(a, b)
  }

  const isCorrectAnswer = (correctAnswer, userAnswer) =>
    correctAnswer === +userAnswer

  const getWrongAnswerMsg = (correctAnswer, userAnswer) =>
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`

  const gcdGame = () => {
    for (let i = 0; i < GAME_ROUNDS; i += 1) {
      const randomNumberA = getRandomNumber()
      const randomNumberB = getRandomNumber()

      console.log(`Question: ${randomNumberA} ${randomNumberB}`)

      const userAnswer = readlineSync.question('Your answer: ')
      const correctAnswer = getCorrectAnswer(randomNumberA, randomNumberB)

      const isCorrect = isCorrectAnswer(correctAnswer, userAnswer)

      const roundMessage = isCorrect
        ? 'Correct!'
        : getWrongAnswerMsg(correctAnswer, userAnswer)

      if (!isCorrect) {
        console.log(roundMessage)
        console.log(`Let's try again, ${name}!`)

        return
      }

      console.log(roundMessage)
    }

    console.log(`Congratulations, ${name}!`)
  }

  gcdGame()
}
