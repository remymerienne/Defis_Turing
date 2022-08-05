import { getPrimeFactorList } from './turing/prime_factors.js';
import { getPrimeNumberList } from './turing/prime_numbers.js';

// ************************************

const start = performance.now();

console.log('Nombres premiers up to 100');
console.log(getPrimeNumberList(100));
console.log('Facteurs premiers de 4000 :');
console.log(getPrimeFactorList(4000));

const end = performance.now();
console.log(end - start + ' ms.');

// ************************************
