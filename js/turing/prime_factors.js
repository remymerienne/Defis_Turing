/**
 * @module prime-factors
 * @description Ensemble des fonctions permettant de décomposer un entier naturel sous la forme d'un produit de nombres premiers (Décomposition en produit de facteurs premiers).
 * @author Rémy Merienne
 */

/**
 * @function
 * @name getShortPrimeNumberList
 * @description Retourne la liste des nombres premiers compris entre **_2_** et **_√n_**.
 * @param {number} n - Nombre dont la racine carré déterminera la fin de la liste
 * @returns {number[]} Tableau des nombres premiers compris entre **_2_** et **_√n_**.
 */
const getShortPrimeNumberList = (n) => {
  // Tableau qui recevra les nombres premiers.
  let shortPrimeNumberList = [];
  // Boucle itérant sur l'entier naturel 'e' entre 2 et √n.
  for (let e = 2; e <= Math.sqrt(n); e++) {
    // Si l'entier naturel 'e' est un nombre premier, il est stocké dans le
    // tableau.
    if (n % e === 0) {
      shortPrimeNumberList.push(e);
    }
  }
  return shortPrimeNumberList;
};

/**
 * @function
 * @name getFirstQuotient
 * @description Retourne le premier quotient entier trouvé de **_n_** divisé par un des nombres contenus dans **_list_**.
 * @param {number} n - Nombre à diviser
 * @param {number[]} list - Liste des diviseurs à soumettre
 * @returns {number} Premier quotient entier trouvé de **_n_** divisé par un des nombres contenus dans **_list_**.
 */
const getFirstQuotient = (n, list) => {
  for (let element of list) {
    if (n % element === 0) {
      return n / element;
    }
  }
};

/**
 * @function
 * @name getPrimeFactorList
 * @description Retourne la liste des facteurs premiers de **_n_**.
 * @param {number} n - Nombre à décomposer en facteurs premiers
 * @returns {number[]} Liste des facteurs premiers de **_n_**.
 */
const getPrimeFactorList = (n) => {
  const list = getShortPrimeNumberList(n);
  let primeFactorList = [];
  // Tant que le diviseur est inférieur ou égale à la racine carrée du nombre
  // qu'il est censé diviser :
  while (n / getFirstQuotient(n, list) <= Math.sqrt(n)) {
    // Le premier diviseur est stocké dans le tableau de résultat.
    primeFactorList.push(n / getFirstQuotient(n, list));
    // Le quotient devient le nouveau nombre à tester.
    n = getFirstQuotient(n, list);
  }
  // Le dernier quotient obtenu devient le dernier facteur premier et est
  // ajouté au tableau.
  primeFactorList.push(n);
  return primeFactorList;
};

export { getShortPrimeNumberList, getFirstQuotient, getPrimeFactorList };
