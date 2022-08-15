import * as nodes from './constants/mainNodes.js';
import FibonacciSequense from './containers/FibonacciSequence.js';
import FibonacciSequenseUI from './views/FibonacciSequenceUI.js';

nodes.fibonacci.innerHTML = FibonacciSequenseUI();
new FibonacciSequense();

// = Nombres premiers
// console.log('Nombres premiers up to 1 000 000');
// console.log(prime.getPrimeNumberList(1000000));

// = Facteurs premiers
// console.log('Facteurs premiers de 999 999 :');
// console.log(prime.getPrimeFactorList(999999));
