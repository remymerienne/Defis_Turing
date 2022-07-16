import { getSumOfListNumbers } from '../js/common_functions';

describe('getSumOfListNumbers() Unit Test Suites', () => {
  test('An array of numbers passed as an argument should return the sum of these numbers', () => {
    expect(getSumOfListNumbers([1, 2, 3, 4])).toBe(10);
  });
});
