require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Testa se fetchItem é uma function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se ao chamar fetchItem com o parâmetro MLB1615760527, fetch é chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se ao chamar fetchItem com o parâmetro MLB1615760527, fetch utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Testa se o retorno da função fetchItem com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto item', async () => {
    const ret = await fetchItem('MLB1615760527');
    expect(ret).toEqual(item);
  });
  it('Testa se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const ret = await fetchItem();
    expect(ret).toEqual(new Error('You must provide an url'));
  });
});
