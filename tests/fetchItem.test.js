require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Testa se fetchItem é uma função', () => {
    expect(fetchItem).toBeInstanceOf(Function);
  });
  test('Ao chamar a função fetchItem com um id, a função fetch é chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
});
