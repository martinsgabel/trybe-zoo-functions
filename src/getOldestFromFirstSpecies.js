const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empAnimals = employees.find((emp) => emp.id === id).responsibleFor;
  const animals = species.find((specie) => empAnimals.includes(specie.id));
  const res = animals.residents.reduce((acc, resident) => {
    if (resident.age > acc.age) {
      return resident;
    }
    return acc;
  });
  return Object.values(res);
}

module.exports = getOldestFromFirstSpecies;
