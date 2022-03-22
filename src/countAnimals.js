const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  const { residents } = species;

  if (!animal) {
    return species.map((specie) => `${specie.name}: ${specie.residents.length}`);
  }

  
}

module.exports = countAnimals;

console.log(countAnimals());
