// test si un nombre est multiple de 5
export const isMultipleOfFive = (number) => {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

// test si un nombre est multiple de 7
export const isMultipleOfSeven = (number) => {
  if (number % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

// retourne un tableau de nombres multiples de 5 ou de 7 entre 5 et un nombre cible
export const getArrayOfMultiples = (targetNumber) => {
  const multipleArray = [];
  for (let i = 5; i < targetNumber; i++) {
    if (isMultipleOfFive(i) || isMultipleOfSeven(i)) {
      multipleArray.push(i);
    }
  }
  return multipleArray;
};

// retourne la somme d'un tableau
export const getSumOfMultiplesArray = (array) => {
  return array.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante
  );
};

export const turing_1Solution = () => {
  return getSumOfMultiplesArray(getArrayOfMultiples(2013));
};
