const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    const list = species.reduce((acc, currentValue) => {
      acc[currentValue.location] = currentValue.name;
      return acc;
    }, {});
    return list;
  }
}

module.exports = getAnimalMap;

console.log(getAnimalMap());
