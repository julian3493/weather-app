import { getData } from './modules/api_data';

const addEvents = () => {
  const search = document.querySelector('.search');


  search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      getData(search.value);
    }
  })
}
getData('bogota');
addEvents();