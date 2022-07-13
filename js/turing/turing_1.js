import { getSumOfArrayNumbers } from '../common_functions.js';

export const isMultipleOfFive = (number) => {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

export const isMultipleOfSeven = (number) => {
  if (number % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

export const getArrayOfMultiples = (targetNumber) => {
  const multipleArray = [];
  for (let i = 5; i < targetNumber; i++) {
    if (isMultipleOfFive(i) || isMultipleOfSeven(i)) {
      multipleArray.push(i);
    }
  }
  return multipleArray;
};

export const turing_1Solution = () => {
  return getSumOfArrayNumbers(getArrayOfMultiples(2013));
};
