import {
  isMultipleOfFive,
  isMultipleOfSeven,
  getListOfMultiples,
  getSumOfMultiples,
} from '../js/turing/turing_1.js';

describe('isMultipleOfFive() Unit Test Suites', () => {
  test('A multiple of 5 passed as an argument should return true', () => {
    expect(isMultipleOfFive(5)).toBe(true);
  });
  test('A non-multiple of 5 passed as an argument should return false', () => {
    expect(isMultipleOfFive(6)).toBe(false);
  });
});

describe('isMultipleOfSeven() Unit Test Suites', () => {
  test('A multiple of 7 passed as an argument should return true', () => {
    expect(isMultipleOfSeven(7)).toBe(true);
  });
  test('A non-multiple of 7 passed as an argument should return false', () => {
    expect(isMultipleOfSeven(8)).toBe(false);
  });
});

describe('getListOfMultiples() Unit Test Suites', () => {
  test('The number 40 passed as an argument should return an array containing the multiples of 5 et 7 up to 40', () => {
    const listOfMultiples = [5, 7, 10, 14, 15, 20, 21, 25, 28, 30, 35];
    expect(getListOfMultiples(40)).toEqual(listOfMultiples);
  });
});

describe('getSumOfMultiples() Unit Test Suites', () => {
  test('It should return the sum of the multiples of 5 and 7 between 5 and the number passed as an argument', () => {
    expect(getSumOfMultiples(2013)).toBe(636456);
  });
});
