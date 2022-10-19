const fetchItem = async (id) => {
  // seu código aqui
  try {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const result = await fetch(url);
  const json = await result.json();
  return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
