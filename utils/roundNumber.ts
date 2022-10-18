const roundNumber = (inputNum: number | undefined, decimalNum = 1) => {
  if (inputNum === undefined) return undefined;
  const multiplier = 10 * decimalNum || 1;
  return Math.round(inputNum * multiplier) / multiplier;
};

export default roundNumber;
