const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getExhibition(day) {
  const exhibition = species.filter((specie) => specie.availability.includes(day));
  const nomesExb = exhibition.map((item) => item.name);
  return nomesExb;
}

function exhibitionByDays(days) {
  const getExbByDay = days.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: getExhibition(curr),
    };
    if (curr === 'Monday') {
      acc[curr] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return acc;
  }, {});
  return getExbByDay;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  if (!scheduleTarget) {
    return exhibitionByDays(days);
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: exhibitionByDays(days)[scheduleTarget] };
  }
  const foundSpec = species.find((specie) => specie.name === scheduleTarget);
  if (foundSpec) {
    const specieArr = foundSpec.availability;
    return specieArr;
  }
  return exhibitionByDays(days);
}

module.exports = getSchedule;

// console.log(getSchedule());
// console.log(getSchedule('Tuesday'));
console.log(getSchedule('lions'));
