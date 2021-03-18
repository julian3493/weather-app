import { getData } from './modules/api_data'
import { setUnits } from './modules/set_values'

const change = () => {
  const city = document.querySelector('h2');
  console.log(city.textContent)
  getData(city.textContent);
  setUnits();
}

const addEvents = () => {
  const search = document.querySelector('.search');
  const celsius = document.querySelector('#celsius');
  const farenheit = document.querySelector('#farenheit');
  const btn = document.querySelector('#searchBtn');

  search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      getData(search.value);
      setUnits();
    }
  })

  celsius.addEventListener('click', change);
  farenheit.addEventListener('click', change);
  btn.addEventListener('click', () => {
    getData(search.value);
    setUnits();
  })
}

getData('bogota');
addEvents();
setUnits();