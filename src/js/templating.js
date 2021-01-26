import itemsTemplate from '../templates/food-items.hbs';
// console.log(itemsTemplate);
import foods from '../menu.json';
import '../css/styles.css';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemplate(foods);
menuRef.insertAdjacentHTML('beforeend', markup);
