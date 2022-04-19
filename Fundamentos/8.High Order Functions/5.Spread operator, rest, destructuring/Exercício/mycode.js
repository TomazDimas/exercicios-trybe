const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  return ids.map((id) => species.find((specie) => specie.id === id));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
