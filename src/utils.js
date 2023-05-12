const getRandomNumber = (max = 20, min = 5) => Math.round(Math.random() * (max - min) + min);

export default getRandomNumber;
