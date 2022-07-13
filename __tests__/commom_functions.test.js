import { getSumOfArrayNumbers } from '../js/common_functions';

describe('getSumOfArrayNumbers() Unit Test Suites', () => {
  test('An array of numbers passed as an argument should return the sum of these numbers', () => {
    expect(getSumOfArrayNumbers([1, 2, 3, 4])).toBe(10);
  });
});
