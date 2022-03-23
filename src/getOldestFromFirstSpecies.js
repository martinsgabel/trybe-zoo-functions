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

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
