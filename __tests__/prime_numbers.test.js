import {
  isPrimeNumber,
  getPrimeNumberList,
} from '../js/turing/prime_numbers.js';

describe('isPrimeNumber() Unit Test Suites', () => {
  test('A non-prime number passed as an argument should return false', () => {
    expect(isPrimeNumber(38)).toBe(false);
  });
  test('A prime number passed as an argument should return true', () => {
    expect(isPrimeNumber(41)).toBe(true);
  });
});

describe('getPrimeNumberList() Unit Test Suites', () => {
  test('The number 100 passed as an argument should return a prime number list between 2 and 100', () => {
    const number = 100;
    const primeNumberList = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];
    expect(getPrimeNumberList(number)).toEqual(primeNumberList);
  });
});
