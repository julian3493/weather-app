import { setValues, getUnits } from './set_values';
import addImg from './addImg';

const getData = async (city) => {
  const unit = getUnits();
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=70c8ad9d3ce4e9eba23caf221443c534`, { mode: 'cors' });
  const data = await response.json();
  const values = {};
  values.city = data.name;
  values.weather = data.weather[0].main;
  values.weatherDesc = data.weather[0].description;
  values.temp = data.main.temp;
  values.feelsLike = data.main.feels_like;
  values.humidity = data.main.humidity;
  setValues(values);
  addImg();
};

export default getData;