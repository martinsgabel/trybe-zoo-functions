const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectSpecie = species.find((specie) => specie.name === animal);

  // console.log(selectSpecie);

  const { residents } = selectSpecie;

  // console.log(residents);

  return residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;

// console.log(getAnimalsOlderThan('lions', 10));
