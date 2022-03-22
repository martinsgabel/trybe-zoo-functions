const data = require('../data/zoo_data');

function isManager(id) {
  // verificar se é gerente, retorno bool
  const { employees } = data;

  const findEmp = employees.filter((employee) => employee.id === id).firstName;

  return findEmp;
}

function getRelatedEmployees(managerId) {
  // se for gerente, array de pessoas nome completo dela
  // se não lançar um Erro "O id inserido não é de uma pessoa colaboradora gerente!"
}

module.exports = { isManager, getRelatedEmployees };

console.log('56d43ba3-a5a7-40f6-8dd7-cbb05082383f');
