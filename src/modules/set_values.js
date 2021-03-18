const setValues = (valObj) => {
  const city = document.querySelector('h2');
  const weatherCond = document.querySelector('.weatherCond');
  const weatherDesc = document.querySelector('.weatherDesc');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');

  city.textContent = valObj.city;
  weatherCond.textContent = valObj.weather;
  weatherDesc.textContent = valObj.weatherDesc;
  temp.textContent = valObj.temp;
  feelsLike.textContent = valObj.feelsLike;
  humidity.textContent = valObj.humidity;
};

const getUnits = () => {
  const opt = document.getElementsByName('radioBtn');
  let uni = '';
  for (let i = 0; i < opt.length; i += 1) {
    if (opt[i].checked) {
      uni = opt[i].value;
    }
  }
  return uni;
};

const setUnits = () => {
  const unit = getUnits();
  const spans = document.getElementsByClassName('unit');
  if (unit === 'metric') {
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].textContent = '°C';
    }
  }
  if (unit === 'imperial') {
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].textContent = '°F';
    }
  }
};

export { setValues, getUnits, setUnits };