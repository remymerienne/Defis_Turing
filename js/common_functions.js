export const getSumOfArrayNumbers = (array) => {
  return array.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante
  );
};

export const displaySolution = (number, solution) => {
  const start = performance.now();
  console.log('Défis N' + number + ' : ' + solution);
  const end = performance.now();
  console.log(end - start + ' ms.');
};
