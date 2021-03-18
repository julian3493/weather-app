import { getData } from './modules/api_data'
import { setUnits } from './modules/set_values'

const addEvents = () => {
  const search = document.querySelector('.search');

  search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      getData(search.value);
      setUnits();
    }
  })
}
getData('bogota');
addEvents();