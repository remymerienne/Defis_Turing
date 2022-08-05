import {
  getShortPrimeNumberList,
  getFirstQuotient,
  getPrimeFactorList,
} from '../js/arithmetic/prime_factors.js';

const number = 4000;
const shortPrimeNumberList = [2, 4, 5, 8, 10, 16, 20, 25, 32, 40, 50];
const firstQuotient = 2000;
const primeFactorList = [2, 2, 2, 2, 2, 5, 5, 5];

describe('getShortPrimeNumberList() Unit Test Suites', () => {
  test('should return the list of prime numbers between the number passed as argument and its square root', () => {
    expect(getShortPrimeNumberList(number)).toEqual(shortPrimeNumberList);
  });
});

describe('getFirstQuotient() Unit Test Suites', () => {
  test('should return the first integer quotient found of `number` divided by one of the numbers contained in `shortPrimeNumberlist`', () => {
    expect(getFirstQuotient(number, shortPrimeNumberList)).toBe(firstQuotient);
  });
});

describe('getPrimeFactorList() Unit Test Suites', () => {
  test('should return the prime factors list of `number`', () => {
    expect(getPrimeFactorList(number)).toEqual(primeFactorList);
  });
});
