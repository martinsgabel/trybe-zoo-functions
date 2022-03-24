const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const locais = species.reduce((acc, curr) => {
    if (!acc.includes(curr.location)) {
      acc.push(curr.location);
      return acc;
    } return acc;
  }, {});

  return locais;
}

module.exports = getAnimalMap;

console.log(getAnimalMap());
