import { getSumOfListNumbers } from '../common_functions.js';

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

const getListfilteredByOddNumbers = (list) => {
  return list.filter((el) => el % 2 !== 0);
};

const getSumOfOddNumbersInFibonacciSequence = (maximumValue) => {
  return getSumOfListNumbers(
    getListfilteredByOddNumbers(getFibonacciSequence(maximumValue))
  );
};

export { getSumOfOddNumbersInFibonacciSequence };
