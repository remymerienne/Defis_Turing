import { getPrimeFactorList } from './arithmetic/prime_factors.js';
import { getPrimeNumberList } from './arithmetic/prime_numbers.js';
import { getFibonacciSequence } from './arithmetic/fibonacci_sequence.js';

let start;
let end;

// = Nombres premiers
start = performance.now();
console.log('Nombres premiers up to 100');
console.log(getPrimeNumberList(100));
end = performance.now();
console.log(end - start + ' ms.');

// = Facteurs premiers
start = performance.now();
console.log('Facteurs premiers de 3 003 :');
console.log(getPrimeFactorList(3003));
end = performance.now();
console.log(end - start + ' ms.');

// = Suite de Fibonacci
start = performance.now();
console.log('Suite de Fibonacci up to 100 000 :');
console.log(getFibonacciSequence(100000));
end = performance.now();
console.log(end - start + ' ms.');
