const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  // seu código aqui
  const employeeS = [];

  employeeName.forEach((empName) => employeeS.push(employees.filter((employee) => employee.firstName === empName || employee.lastName === empName)));

  return employeeS;
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Burl', 'Nelson'));
