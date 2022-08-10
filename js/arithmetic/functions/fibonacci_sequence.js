const getFibonacciSequence = (maximumValue) => {
  const fibonacciSequence = [0, 1];

  let length = fibonacciSequence.length;
  let nextItem = fibonacciSequence[length - 2] + fibonacciSequence[length - 1];

  while (nextItem <= maximumValue) {
    fibonacciSequence.push(nextItem);
    length = fibonacciSequence.length;
    nextItem = fibonacciSequence[length - 2] + fibonacciSequence[length - 1];
  }

  return fibonacciSequence;
};

export { getFibonacciSequence };
