/* eslint-disable max-lines-per-function */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(...animal) {
  if (!animal) {
    const listAnimals = species.reduce((acc, currentValue) => {
      acc[currentValue.name] = currentValue.residents.length;
      return acc;
    }, {});
    return listAnimals;
  }
}

module.exports = countAnimals;

console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
