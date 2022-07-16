import { getSumOfArrayNumbers } from '../common_functions.js';

/**
 * A function that returns an array of numbers that are less than the target number.
 *
 * @function
 * @name getFibonacciSequence
 * @param {number} target
 * @returns {number[]}
 */
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

/**
 * A function that returns an array of odd numbers.
 *
 * @function
 * @name getArrayfilterByOddNumbers
 * @param {number[]} array
 * @returns {number[]}
 */
const getArrayfilterByOddNumbers = (array) => {
  return array.filter((el) => el % 2 !== 0);
};

/**
 * A function declaration.
 *
 * @function
 * @name turing_2Solution
 * @returns {number}
 */
const turing_2Solution = () => {
  return getSumOfArrayNumbers(
    getArrayfilterByOddNumbers(getFibonacciSequence(4000000))
  );
};

export { turing_2Solution };
