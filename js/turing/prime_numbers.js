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
 * @description Génère une liste des nombres premiers compris entre 2 et **_n_**.
 * @param {number} n - Nombre maximum à inclure dans la liste
 * @returns {number[]} Liste des nombres premiers compris entre 2 et **_n_**.
 */
const getPrimeNumberList = (n) => {
  let primeNumberList = [];
  for (let d = 2; d <= n; d++) {
    if (isPrimeNumber(d) === true) {
      primeNumberList.push(d);
    }
  }
  return primeNumberList;
};

export { isPrimeNumber, getPrimeNumberList };
