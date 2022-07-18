import {
  getFibonacciSequence,
  getListFilteredByOddNumbers,
  getSumOfOddNumbersInFibonacciSequence,
} from '../js/turing/turing_2.js';

describe('getFibonacciSequence() Unit Test Suites', () => {
  test('', () => {
    const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(getFibonacciSequence(100)).toEqual(fibonacciSequence);
  });
});

describe('getListFilteredByOddNumbers() Unit Test Suites', () => {
  test('', () => {
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const oddNumberList = [1, 3, 5, 7, 9, 11];
    expect(getListFilteredByOddNumbers(numberList)).toEqual(oddNumberList);
  });
});

describe('getSumOfOddNumbersInFibonacciSequence() Unit Test Suites', () => {
  test('', () => {
    expect(getSumOfOddNumbersInFibonacciSequence(4000000)).toBe(4613732);
  });
});
