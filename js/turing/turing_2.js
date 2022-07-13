import { getSumOfArrayNumbers } from '../common_functions.js';

const getFibonacciSequence = (target) => {
  const array = [0, 1];
  let l = array.length;
  let nextItem = array[l - 2] + array[l - 1];

  while (nextItem < target) {
    array.push(nextItem);
    l = array.length;
    nextItem = array[l - 2] + array[l - 1];
  }

  return array;
};

const getArrayfilterByOddNumbers = (array) => {
  return array.filter((el) => el % 2 !== 0);
};

export const turing_2Solution = () => {
  return getSumOfArrayNumbers(
    getArrayfilterByOddNumbers(getFibonacciSequence(4000000))
  );
};
