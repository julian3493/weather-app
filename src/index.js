import apiData from './modules/apiData';
import { setUnits } from './modules/set_values';

const change = () => {
  const city = document.querySelector('h2');
  apiData(city.textContent);
  setUnits();
};

const addEvents = () => {
  const search = document.querySelector('.search');
  const celsius = document.querySelector('#celsius');
  const farenheit = document.querySelector('#farenheit');
  const btn = document.querySelector('#searchBtn');

  search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      apiData(search.value);
      setUnits();
    }
  });

  celsius.addEventListener('click', change);
  farenheit.addEventListener('click', change);
  btn.addEventListener('click', () => {
    apiData(search.value);
    setUnits();
  });
};

apiData('bogota');
addEvents();
setUnits();