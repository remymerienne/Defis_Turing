import { getSumOfListNumbers } from '../common_functions.js';

/**
 * @module Turing_2
 * @description Source code for resolving the second challenge
 * @author Rémy Merienne
 */

/**
 * @function
 * @name getFibonacciSequence
 * @description Return a list of numbers that are part of the Fibonacci sequence between 0 and the number passed as an argument.
 * @param {number} maximumValue - Highest number to stop list
 * @returns {number[]}
 */
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

/**
 * @function
 * @name getListFilteredByOddNumbers
 * @description Return a list of odd numbers.
 * @param {number[]} list - List to filter by odd numbers
 * @returns {number[]}
 */
const getListFilteredByOddNumbers = (list) => {
  return list.filter((el) => el % 2 !== 0);
};

/**
 * @function
 * @name getSumOfOddNumbersInFibonacciSequence
 * @description Return the sum of odd numbers numbers that are part of the Fibonacci sequence between 0 and the number passed as an argument.
 * @param {number} maximumValue - Highest number to stop list
 * @requires common_functions.getSumOfListNumbers()
 * @requires (inner).getListFilteredByOddNumbers()
 * @requires (inner).getFibonacciSequence()
 * @returns {number}
 */
const getSumOfOddNumbersInFibonacciSequence = (maximumValue) => {
  return getSumOfListNumbers(
    getListFilteredByOddNumbers(getFibonacciSequence(maximumValue))
  );
};

export {
  getFibonacciSequence,
  getListFilteredByOddNumbers,
  getSumOfOddNumbersInFibonacciSequence,
};
