require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Testa se fetchProducts é uma função', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  test('Ao executar a função fetchProducts com o argumento computador, a função fetch é chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  }); 
  test('Ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint correto', () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('Ao chamar a função fetchProducts com o argumento computador, a função retorna a estrutura de dados esperada', () => {
    expect(typeof fetchProducts('computador')).toEqual(typeof computadorSearch);
  });
  test('Ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    try {
      fetchProducts();
    } catch (error) {
      throw new Error('You must to provide an url');
    }
  }); 
});
