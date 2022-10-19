const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    saveCartItems('ID: MLB2711430947 | TITLE: Notebook Multilaser Legacy Book Pc310 Preta 14.1 , Intel Celeron N3000  4gb De Ram 64gb Ssd, Intel Hd Graphics 1366x768px Windows 10 Home | PRICE: $1187');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems('ID: MLB2711430947 | TITLE: Notebook Multilaser Legacy Book Pc310 Preta 14.1 , Intel Celeron N3000  4gb De Ram 64gb Ssd, Intel Hd Graphics 1366x768px Windows 10 Home | PRICE: $1187');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartiItems', 'ID: MLB2711430947 | TITLE: Notebook Multilaser Legacy Book Pc310 Preta 14.1 , Intel Celeron N3000  4gb De Ram 64gb Ssd, Intel Hd Graphics 1366x768px Windows 10 Home | PRICE: $1187');
  });
});
