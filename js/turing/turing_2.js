import { getSumOfArrayNumbers } from '../common_functions.js';

const getFibonacciSequence = (maximumValue) => {
  let sequence = [0, 1];
  let l = sequence.length;
  let nextItem = sequence[l - 2] + sequence[l - 1];
  while (nextItem < maximumValue) {
    sequence.push(nextItem);
    l = sequence.length;
    nextItem = sequence[l - 2] + sequence[l - 1];
  }
  return sequence;
};

const getArrayfilterByOddNumbers = (array) => {
  return array.filter((el) => el % 2 !== 0);
};

const sumOfOddNumbersInFibonacciSequence = (maximumValue) => {
  return getSumOfArrayNumbers(
    getArrayfilterByOddNumbers(getFibonacciSequence(maximumValue))
  );
};

export { sumOfOddNumbersInFibonacciSequence };
