const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  const childCount = entrants.filter((entrant) => entrant.age < 18).length;
  const adultCount = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorCount = entrants.filter((entrant) => entrant.age >= 50).length;
  const objRes = {
    adult: adultCount,
    senior: seniorCount,
    child: childCount,
  };
  return objRes;
}

function calculateEntry(entrants) {
  if (entrants === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const vChild = child * prices.child;
  const vAdult = adult * prices.adult;
  const vSenior = senior * prices.senior;
  const total = vSenior + vAdult + vChild;
  return total;
}

module.exports = { calculateEntry, countEntrants };
