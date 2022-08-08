import {
  isPrimeNumber,
  getFirstDivider,
  getPrimeFactorList,
} from '../js/arithmetic/prime_factors.js';

const number = 3003;
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

describe('getFirstDivider() Unit Test Suites', () => {
  test('should return the first prime number that divides `number`.', () => {
    expect(getFirstDivider(number)).toBe(firstDivider);
  });
});

describe('getPrimeFactorList() Unit Test Suites', () => {
  test('should return the prime factors list of `number`', () => {
    expect(getPrimeFactorList(number)).toEqual(primeFactorList);
  });
});
