export const getRandomNumber = (minValue = 1, maxValue = 101) => {
  const rand = minValue + Math.random() * (maxValue + 1 - minValue);
  return Math.floor(rand);
};

export const isPrime = (num) => {
  for (let i = 2, a = Math.sqrt(num); i <= a; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const isEven = (num) => num % 2 === 0;

export const getRandomProgression = () => {
  let count = 0;
  const progressionLength = getRandomNumber(5, 10);
  let startValue = getRandomNumber();
  const randomProgression = [startValue];
  const progressionStep = getRandomNumber(1, 9);
  while (count < progressionLength - 1) {
    count += 1;
    startValue += progressionStep;
    randomProgression.push(startValue);
  }
  return randomProgression;
};
