import { getSumOfMultiples } from './turing/turing_1.js';
import { getSumOfOddNumbersInFibonacciSequence } from './turing/turing_2.js';
import { getListOfPrimeFactors } from './turing/turing_3.js';

const displaySolution = (number, solution) => {
  console.log('Défis N' + number + ' : ' + solution);
};

// ************************************

const start = performance.now();

displaySolution(1, getSumOfMultiples(2013));
displaySolution(2, getSumOfOddNumbersInFibonacciSequence(4000000));
displaySolution(3, getListOfPrimeFactors(20130101));

const end = performance.now();
console.log(end - start + ' ms.');

// ************************************
