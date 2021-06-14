import './sass/main.scss';
import itemsTemplate from './templates/menu-item.hbs'
import menu from './menu.json';
import { changeTheme, saveTheme} from './js/themeSet';


const list = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);
list.insertAdjacentHTML('beforeend', markup);

saveTheme();





