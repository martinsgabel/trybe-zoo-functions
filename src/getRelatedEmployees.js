const data = require('../data/zoo_data');

function isManager(id) {
  // verificar se é gerente, retorno bool
  const { employees } = data;

  const isMang = employees.some((employee) => employee.managers.includes(id));

  return isMang;
}

function getRelatedEmployees(managerId) {
  // se for gerente, array de pessoas nome completo dela
  // se não lançar um Erro "O id inserido não é de uma pessoa colaboradora gerente!"
}

module.exports = { isManager, getRelatedEmployees };

console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
