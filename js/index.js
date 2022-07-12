import { turing_1Solution } from './turing/turing_1.js';

const start = performance.now();
const solution = turing_1Solution();
const end = performance.now();
console.log('Défis N1 : ' + solution + ' => ' + (end - start) + ' ms.');
