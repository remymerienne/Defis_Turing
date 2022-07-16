import { sumOfMultiples } from './turing/turing_1.js';
import { turing_2Solution } from './turing/turing_2.js';

const displaySolution = (number, solution) => {
  console.log('Défis N' + number + ' : ' + solution);
};

const start = performance.now();

displaySolution(1, sumOfMultiples(2013));
displaySolution(2, turing_2Solution());

const end = performance.now();
console.log(end - start + ' ms.');
