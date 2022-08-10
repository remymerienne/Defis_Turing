import Prime from '../js/containers/prime.js';

const prime = new Prime();

describe('isPrimeNumber() Unit Test Suites', () => {
  test('A non-prime number passed as an argument should return false', () => {
    const nonPrimeNumber = 38;

    expect(prime.isPrimeNumber(nonPrimeNumber)).toBe(false);
  });

  test('A prime number passed as an argument should return true', () => {
    const primeNumber = 41;

    expect(prime.isPrimeNumber(primeNumber)).toBe(true);
  });
});

describe('getPrimeNumberList() Unit Test Suites', () => {
  test('The number 100 passed as an argument should return a prime number list between 2 and 100', () => {
    const targetNumber = 100;
    const primeNumberList = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];

    expect(prime.getPrimeNumberList(targetNumber)).toEqual(primeNumberList);
  });
});

describe('getFirstPrimeDivider() Unit Test Suites', () => {
  test('should return the first prime number that divides `number`.', () => {
    const number = 2093;
    const firstPrimeDivider = 7;

    expect(prime.getFirstPrimeDivider(number)).toBe(firstPrimeDivider);
  });
});

describe('getPrimeFactorList() Unit Test Suites', () => {
  test('should return the prime factors list of `number`', () => {
    const number = 3003;
    const primeFactorList = [3, 7, 11, 13];

    expect(prime.getPrimeFactorList(number)).toEqual(primeFactorList);
  });
});
