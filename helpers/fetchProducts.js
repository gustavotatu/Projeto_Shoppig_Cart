const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');
const { results } = require('../mocks/search');

const fetchProducts = async (computador) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const result = await fetch(url);
    const json = await result.json();
    return json.results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
