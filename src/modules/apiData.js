import { setValues, getUnits } from './set_values';
import addImg from './addImg';

const getData = async (city) => {
  try {
    const unit = getUnits();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=70c8ad9d3ce4e9eba23caf221443c534`, { mode: 'cors' });
    const data = await response.json();
    setValues(data);
    addImg();
  } catch (error) {
    console.log(error);
  }
};

export default getData;