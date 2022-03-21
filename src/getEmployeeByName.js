/* eslint-disable max-len */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employees.filter((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Burl'));
console.log(getEmployeeByName('Nelson'));

// employeeName.forEach((empName) => employees.filter((employee) => employee.firstName === empName || employee.lastName === empName));

// let res;

//   for (let index = 0; index < employeeName.length; index += 1) {
//     res = employees.filter((employee) => employee.firstName === employeeName[index] || employee.lastName === employeeName[index]);
//   }

//   return res;
