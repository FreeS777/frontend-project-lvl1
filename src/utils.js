export default (minValue = 1, maxValue = 101) => {
  const rand = minValue + Math.random() * (maxValue + 1 - minValue);
  return Math.floor(rand);
};
