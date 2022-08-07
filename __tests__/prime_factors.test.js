import {
  isPrimeNumber,
  getShortPrimeNumberList,
  getFirstDivider,
  getPrimeFactorList,
} from '../js/arithmetic/prime_factors.js';

const number = 3003;
const shortPrimeNumberList = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
];
const firstDivider = 3;
const primeFactorList = [3, 7, 11, 13];

describe('isPrimeNumber() Unit Test Suites', () => {
  test('A non-prime number passed as an argument should return false', () => {
    expect(isPrimeNumber(38)).toBe(false);
  });
  test('A prime number passed as an argument should return true', () => {
    expect(isPrimeNumber(41)).toBe(true);
  });
});

describe('getShortPrimeNumberList() Unit Test Suites', () => {
  test('should return the list of prime numbers between the number passed as argument and its square root', () => {
    expect(getShortPrimeNumberList(number)).toEqual(shortPrimeNumberList);
  });
});

describe('getFirstDivider() Unit Test Suites', () => {
  test('should return the first number contained in `shortPrimeNumberList` that divides `number`.', () => {
    expect(getFirstDivider(number, shortPrimeNumberList)).toBe(firstDivider);
  });
});

describe('getPrimeFactorList() Unit Test Suites', () => {
  test('should return the prime factors list of `number`', () => {
    expect(getPrimeFactorList(number)).toEqual(primeFactorList);
  });
});
