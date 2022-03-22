const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrSpecies = [];

  ids.forEach((elemId) => arrSpecies
    .push(species.find((specie) => specie.id === elemId)));

  return arrSpecies;
}

module.exports = getSpeciesByIds;
