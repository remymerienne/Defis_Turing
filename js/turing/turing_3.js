const isPrimeNumber = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getListOfPrimeFactors = (number) => {
  let primeNumberArray = [];
  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (isPrimeNumber(i) && number % i === 0) {
      primeNumberArray.push(i);
      number = number / i;
      i = 1;
    }
    i++;
  }
  primeNumberArray.push(number);
  return primeNumberArray;
};

export { isPrimeNumber, getListOfPrimeFactors };
