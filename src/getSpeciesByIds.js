const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === '') {
    const emptyArr = [];
    return emptyArr;
  }

  return ids.forEach((elemId) => species.find((specie) => specie.id === elemId));
}

module.exports = getSpeciesByIds;

// eslint-disable-next-line max-len
console.log(getSpeciesByIds());
