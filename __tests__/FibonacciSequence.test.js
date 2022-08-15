/**
 * @jest-environment jsdom
 */

import FibonacciSequenceUI from '../js/views/FibonacciSequenceUI.js';
import FibonacciSequence from '../js/containers/FibonacciSequence.js';

const html = FibonacciSequenceUI();
document.body.innerHTML = html;

describe('getFibonacciSequence() Unit Test Suites', () => {
  test('should return a list of numbers that are part of the Fibonacci sequence between 0 and the number passed as an argument.', () => {
    const fibonacci = new FibonacciSequence();
    const maximumValue = 100;
    const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

    expect(fibonacci.getFibonacciSequence(maximumValue)).toEqual(
      fibonacciSequence
    );
  });
});
