const { /* species, */ employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const isMang = employees.some((employee) => employee.managers.includes(id));

  return isMang;
}

function getRelatedEmployees(managerId) {
  // se for gerente, array de pessoas nome completo dela
  // se não lançar um Erro "O id inserido não é de uma pessoa colaboradora gerente!"
  if (isManager) {
    const listOfEmps = employees.filter((employee) => employee.managers.includes(managerId));

    return listOfEmps;
  }
}

module.exports = { isManager, getRelatedEmployees };
