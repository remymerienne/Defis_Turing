/**
 * @module prime_numbers
 * @description Ensemble des fonctions permettant de générer une liste de nombres premiers.
 * @author Rémy Merienne
 */

/**
 * @function
 * @name isPrimeNumber
 * @description Teste la primalité d'un entier naturel.
 * @param {number} n - Entier naturel à tester
 * @returns {boolean} Retourne **_true_** si **_n_** est un nombre premier. Sinon, retourne **_false_**.
 */
const isPrimeNumber = (n) => {
  // Si le diviseur 'd' (compris entre 2 et √n) divise 'n', alors 'n' n'est pas
  // un nombre premier et la fonction retourne 'false'. La boucle s'arrête.
  for (let d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      return false;
    }
  }
  // Si aucun diviseur n'a été trouvé, alors 'n' est un nombre premier. La
  // fonction retourne 'true'.
  return true;
};

/**
 * @function
 * @name getPrimeNumberList
 * @description Retourne la liste des nombres premiers compris entre 2 et le nombre passé en argument .
 * @param {number} maximumValue - Nombre le plus grand pouvant figurer dans la liste
 * @returns {number[]}
 */
const getPrimeNumberList = (maximumValue) => {
  let primeNumberList = [];
  for (let e = 2; e <= maximumValue; e++) {
    if (isPrimeNumber(e) === true) {
      primeNumberList.push(e);
    }
  }
  return primeNumberList;
};

export { isPrimeNumber, getPrimeNumberList };
