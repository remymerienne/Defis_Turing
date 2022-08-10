export default class {
  isPrimeNumber(number) {
    for (let divider = 2; divider <= Math.sqrt(number); divider++) {
      if (number % divider === 0) {
        return false;
      }
    }

    return true;
  }

  getPrimeNumberList(maximumValue) {
    const primeNumberList = [];

    for (
      let integerToTest = 2;
      integerToTest <= maximumValue;
      integerToTest++
    ) {
      if (this.isPrimeNumber(integerToTest) === true) {
        primeNumberList.push(integerToTest);
      }
    }

    return primeNumberList;
  }

  getFirstPrimeDivider(number) {
    for (let divider = 2; divider <= Math.sqrt(number); divider++) {
      if (number % divider === 0 && this.isPrimeNumber(divider) === true) {
        return divider;
      }
    }
  }

  getPrimeFactorList(number) {
    const primeFactorList = [];

    while (this.getFirstPrimeDivider(number) <= Math.sqrt(number)) {
      primeFactorList.push(this.getFirstPrimeDivider(number));
      number = number / this.getFirstPrimeDivider(number);
    }

    primeFactorList.push(number);

    return primeFactorList;
  }
}
