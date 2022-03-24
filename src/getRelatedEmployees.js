const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const isMang = employees.some((employee) => employee.managers.includes(id));
  return isMang;
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId)) {
      const listOfEmps = employees.filter((employee) => employee.managers
        .some((empManag) => empManag === managerId));
      const res = listOfEmps.map((emp) => `${emp.firstName} ${emp.lastName}`);
      return res;
    } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
