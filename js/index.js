// import { getSumOfMultiples } from './turing/turing_1.js';
// import { getSumOfOddNumbersInFibonacciSequence } from './turing/turing_2.js';
import { getPrimeFactorList } from './turing/prime_factors.js';
import { getPrimeNumberArray } from './turing/prems.js';

// ************************************

const start = performance.now();
// displaySolution(1, getSumOfMultiples(2013));
// displaySolution(2, getSumOfOddNumbersInFibonacciSequence(4000000));
// displaySolution(3, getListOfPrimeFactors(20130101));

console.log('Facteurs premiers de 4000 => ' + getPrimeFactorList(4000));
console.log('Nombres premiers up to 1000 => ' + getPrimeNumberArray(1000));

const end = performance.now();
console.log(end - start + ' ms.');

// ************************************
