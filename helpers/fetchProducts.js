const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');
const { results } = require('../mocks/search');

const fetchProducts = (computador) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  fetch(url);
  return computadorSearch;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
