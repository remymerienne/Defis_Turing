import Prime from './containers/prime.js';
import { getFibonacciSequence } from './functions/fibonacci_sequence.js';

const prime = new Prime();

let start;
let end;

// = Nombres premiers
start = performance.now();
console.log('Nombres premiers up to 1 000 000');
console.log(prime.getPrimeNumberList(1000000));
end = performance.now();
console.log(end - start + ' ms.');

// = Facteurs premiers
start = performance.now();
console.log('Facteurs premiers de 999 999 :');
console.log(prime.getPrimeFactorList(999999));
end = performance.now();
console.log(end - start + ' ms.');

// = Suite de Fibonacci
start = performance.now();
console.log('Suite de Fibonacci up to 1 000 000 :');
console.log(getFibonacciSequence(1000000));
end = performance.now();
console.log(end - start + ' ms.');
