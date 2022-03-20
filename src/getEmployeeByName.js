const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  // seu código aqui
  const employeeS = [];

  // eslint-disable-next-line max-len
  employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return employeeS;
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Burl'));
