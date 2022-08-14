export default class {
  constructor() {
    const calculateButton = document.getElementById('js-calculate-fibonacci');
    const resetButton = document.querySelectorAll('.js-reset-fibonacci');
    const form = document.getElementById('js-form-fibonacci');
    const inputListened = document.getElementById('js-input-fibonacci');
    const nodeToInject = document.getElementById('js-result-fibonacci');

    calculateButton.addEventListener('click', () => {
      const start = performance.now();

      const userInput = inputListened.value;
      const sequence = this.getFibonacciSequence(userInput);
      this.displayFibonacciSequence(sequence, nodeToInject);

      const end = performance.now();
      nodeToInject.innerHTML += `<p style="margin-top: 16px">Temps nécessaire au calcul et à l'affichage => ${
        end - start
      } ms</p>`;
    });

    resetButton.forEach((node) => {
      node.addEventListener('click', () => {
        form.reset();
        nodeToInject.innerHTML = '';
      });
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

  displayFibonacciSequence(fibonacciSequence, nodeToInject) {
    const displayableSequence = fibonacciSequence
      .map((e) => e.toLocaleString())
      .join(' - ');

    nodeToInject.innerHTML = displayableSequence;
  }
}
