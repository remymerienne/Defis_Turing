/**
 * @module fibonacci_sequence
 * @description Fonction permettant de générer la Suite de Fibonacci.
 * @author Rémy Merienne
 */

/**
 * @function
 * @name getFibonacciSequence
 * @description Retourne la suite de Fibonacci comprise entre 0 et le nombre passé en argument.
 * @param {number} maximumValue - Nombre le plus grand pouvant figurer dans la liste
 * @returns {number[]}
 */
const getFibonacciSequence = (maximumValue) => {
  // Debut de la suite par convention.
  let sequence = [0, 1];
  let l = sequence.length;
  // Chaque nouvel élément sera constitué de la somme des deux éléments qui le précède.
  let nextItem = sequence[l - 2] + sequence[l - 1];
  // Tant que la valeur maximum n'est pas atteinte :
  while (nextItem <= maximumValue) {
    // On ajoute le nouvel élément créé.
    sequence.push(nextItem);
    // La longueur de  la suite est recalculée.
    l = sequence.length;
    // On génère un nouvel élément.
    nextItem = sequence[l - 2] + sequence[l - 1];
  }
  return sequence;
};

export { getFibonacciSequence };
