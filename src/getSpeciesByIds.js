const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrSpecies = [];

  ids.forEach((elemId) => arrSpecies.push(species.find((specie) => specie.id === elemId)));

  return arrSpecies;
}

module.exports = getSpeciesByIds;

// TESTS

// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// eslint-disable-next-line max-len
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

// RASCUNHO
/* const arrIds = [];
  ids.forEach((elemId) => arrIds.push(elemId));

  return arrIds;
*/
