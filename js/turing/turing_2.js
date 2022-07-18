import { getSumOfListNumbers } from '../common_functions.js';

/**
 * @module Turing_2
 * @description Source code for resolving the second challenge
 * @author Rémy Merienne
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

const getListFilteredByOddNumbers = (list) => {
  return list.filter((el) => el % 2 !== 0);
};

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
