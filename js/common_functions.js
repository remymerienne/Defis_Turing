const getSumOfListNumbers = (array) => {
  return array.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante
  );
};

export { getSumOfListNumbers };
