import { getSumOfArrayNumbers } from '../common_functions.js';

/**
 * @module Turing_1
 * @description Source code for resolution of the first challenge.
 * @author Rémy Merienne
 */

/**
 * @function
 * @name isMultipleOfFive
 * @description Test if a number is a multiple of 5.
 * @param {number} numberToTest - Number to test
 * @returns {boolean} Return `true` if the number passed as an argument is a multiple of 5. Otherwise return `false`.
 */
const isMultipleOfFive = (numberToTest) => {
  if (numberToTest % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * @function
 * @name isMultipleOfSeven
 * @description Test if a number is a multiple of 7.
 * @param {number} numberToTest - Number to test
 * @returns {boolean} Return `true` if the number passed as an argument is a multiple of 7. Otherwise return `false`.
 */
const isMultipleOfSeven = (numberToTest) => {
  if (numberToTest % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * @function
 * @name getArrayOfMultiples
 * @description Return a list of multiples of 5 and 7 between 5 and the number passed as an argument.
 * @param {number} maximumValue - Largest multiple to achieve
 * @requires (inner).isMultipleOfFive()
 * @requires (inner).isMultipleOfSeven()
 * @returns {number[]}
 */
const getArrayOfMultiples = (maximumValue) => {
  let multipleArray = [];
  for (let i = 5; i < maximumValue; i++) {
    if (isMultipleOfFive(i) || isMultipleOfSeven(i)) {
      multipleArray.push(i);
    }
  }
  return multipleArray;
};

/**
 * @function
 * @name sumOfMultiples
 * @description Return the sum of the multiples of 5 and 7 between 5 and the number passed as an argument.
 * @param {number} maximumValue - The greatest multiple to add
 * @requires common_functions.getSumOfArrayNumbers()
 * @requires (inner).getArrayOfMultiples()
 * @returns {number}
 */
const sumOfMultiples = (maximumValue) => {
  return getSumOfArrayNumbers(getArrayOfMultiples(maximumValue));
};

export {
  isMultipleOfFive,
  isMultipleOfSeven,
  getArrayOfMultiples,
  sumOfMultiples,
};
