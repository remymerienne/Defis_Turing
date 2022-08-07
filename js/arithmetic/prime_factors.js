/**
 * @module prime_factors
 * @description Ensemble des fonctions permettant de décomposer un entier naturel sous la forme d'un produit de nombres premiers (Décomposition en produit de facteurs premiers).
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
 * @name getShortPrimeNumberList
 * @description Retourne la liste des nombres premiers compris entre 2 et la racine carrée du nombre passé en argument.
 * @param {number} n - Nombre dont la racine carré déterminera la valeur maximum de la liste
 * @returns {number[]}
 */
const getShortPrimeNumberList = (n) => {
  let shortPrimeNumberList = [];
  for (let e = 2; e <= Math.sqrt(n); e++) {
    if (isPrimeNumber(e) === true) {
      shortPrimeNumberList.push(e);
    }
  }
  return shortPrimeNumberList;
};

/**
 * @function
 * @name getFirstDivider
 * @description Retourne le premier nombre contenus dans **_list_** qui divise **_n_**.
 * @param {number} n - Nombre à diviser
 * @param {number[]} list - Liste des diviseurs à soumettre
 * @returns {number}
 */
const getFirstDivider = (n, list) => {
  for (let element of list) {
    if (n % element === 0) {
      return element;
    }
  }
};

/**
 * @function
 * @name getPrimeFactorList
 * @description Retourne la liste des facteurs premiers du nombre passé en argument.
 * @param {number} n - Nombre à décomposer en facteurs premiers
 * @returns {number[]}
 */
const getPrimeFactorList = (n) => {
  const list = getShortPrimeNumberList(n);
  let primeFactorList = [];
  // Tant que le diviseur est inférieur ou égale à la racine carrée du nombre
  // qu'il est censé diviser :
  while (getFirstDivider(n, list) <= Math.sqrt(n)) {
    // Le premier diviseur est stocké dans le tableau de résultat.
    primeFactorList.push(getFirstDivider(n, list));
    // Le quotient devient le nouveau nombre à tester.
    n = n / getFirstDivider(n, list);
  }
  // Le dernier quotient obtenu devient le dernier facteur premier et est
  // ajouté au tableau.
  primeFactorList.push(n);
  return primeFactorList;
};

export {
  isPrimeNumber,
  getShortPrimeNumberList,
  getFirstDivider,
  getPrimeFactorList,
};
