const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const listAnimals = species.reduce((acc, currentValue) => {
      acc[currentValue.name] = currentValue.residents.length;
      return acc;
    }, {});
    return listAnimals;
  } if (!animal.sex) {
    const objAnimal = species.find((specie) => specie.name === animal.specie);
    const listAnimal = objAnimal.residents.length;
    return listAnimal;
  } if (animal.specie && animal.sex) {
    const objAnimal = species.find((specie) => specie.name === animal.specie).residents;
    const qtdSex = objAnimal.filter((resident) => resident.sex === animal.sex);
    return qtdSex.length;
  }
}

module.exports = countAnimals;
