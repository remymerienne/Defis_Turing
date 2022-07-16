const getSumOfArrayNumbers = (array) => {
  return array.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante
  );
};

export { getSumOfArrayNumbers };
