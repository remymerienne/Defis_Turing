const getSumOfListNumbers = (array) => {
  return array.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante
  );
};

export { getSumOfListNumbers };

// ************************************

// const isPrimeNumber = (number) => {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const getPrimeNumberArray = (numberUpTo) => {
//   let primeNumberArray = [];
//   for (let i = 2; i <= numberUpTo; i++) {
//     if (isPrimeNumber(i)) {
//       primeNumberArray.push(i);
//     }
//   }
//   return primeNumberArray;
// };

// ************************************
