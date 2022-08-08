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
 * @name getFirstDivider
 * @description Retourne le premier nombre premier qui divise **_n_**.
 * @param {number} n - Nombre à diviser
 * @returns {number}
 */
const getFirstDivider = (n) => {
  for (let e = 2; e <= Math.sqrt(n); e++) {
    if (n % e === 0 && isPrimeNumber(e) === true) {
      return e;
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
  // const list = getShortPrimeNumberList(n);
  let primeFactorList = [];
  // Tant que le diviseur est inférieur ou égale à la racine carrée du nombre
  // qu'il est censé diviser :
  while (getFirstDivider(n) <= Math.sqrt(n)) {
    // Le premier diviseur est stocké dans le tableau de résultat.
    primeFactorList.push(getFirstDivider(n));
    // Le quotient devient le nouveau nombre à tester.
    n = n / getFirstDivider(n);
  }
  // Le dernier quotient obtenu devient le dernier facteur premier et est
  // ajouté au tableau.
  primeFactorList.push(n);
  return primeFactorList;
};

export { isPrimeNumber, getFirstDivider, getPrimeFactorList };
