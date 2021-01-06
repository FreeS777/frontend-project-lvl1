export default (minValue = 1, maxValue = 101) => {
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
