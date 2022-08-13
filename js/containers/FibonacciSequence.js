export default class {
  constructor() {
    const buttonListened = document.getElementById('fibonacciButton');

    buttonListened.addEventListener('click', () => {
      const inputListened = document.getElementById('sequenceMaximumValue');
      const userInput = inputListened.value;

      this.displayFibonacciSequence(userInput);
    });
  }

  getFibonacciSequence(maximumValue) {
    const fibonacciSequence = [0, 1];

    let length = fibonacciSequence.length;
    let nextItem =
      fibonacciSequence[length - 2] + fibonacciSequence[length - 1];

    while (nextItem <= maximumValue) {
      fibonacciSequence.push(nextItem);
      length = fibonacciSequence.length;
      nextItem = fibonacciSequence[length - 2] + fibonacciSequence[length - 1];
    }

    return fibonacciSequence;
  }

  mapFibonacciSequence(array) {
    return array.map((e) => e).join(' - ');
  }

  displayFibonacciSequence(userInput) {
    const nodeToInject = document.getElementById('resultFibonacci');
    const sequence = this.getFibonacciSequence(userInput);
    const displayableSequence = this.mapFibonacciSequence(sequence);

    nodeToInject.innerHTML = displayableSequence;
  }
}
