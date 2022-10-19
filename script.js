// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const itemPrices = [];

const value = document.createElement('p');
value.className = 'total-price';

async function calcPrice() {
  let result = 0;
  for (let i = 0; i < itemPrices.length; i += 1) {
    result += itemPrices[i];
  }

  value.innerText = `Preço final: ${result}`;
  return value;
}

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', function () {
    const cart = document.getElementsByClassName('cart__items')[0];
    cart.removeChild(li);
    const index = itemPrices.indexOf(price);
    itemPrices[index] = 0;
    calcPrice();
  });
  return li;
};

async function mainFP() {
  const json = await fetchProducts('computador');
  const products = json.results; 
  const items = document.getElementsByClassName('items')[0];
  for (let i = 0; i < products.length; i += 1) {
    const sec = createProductItemElement(products[i]);
    items.appendChild(sec);
  }
}

async function buttons() {
  await mainFP();
  const button = document.querySelectorAll('.item__add');
  button.forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const id = btn.parentNode.firstChild.innerText;
      const product = await fetchItem(id);
      itemPrices.push(product.price);
      const cartItem = createCartItemElement(product);
      const orderedList = document.getElementsByClassName('cart__items')[0];
      orderedList.appendChild(cartItem);
      const finalPrice = await calcPrice();
      document.getElementsByClassName('cart')[0].appendChild(finalPrice);
    });
  });
} buttons();

window.onload = () => { };
