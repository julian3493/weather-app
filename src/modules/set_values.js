const setValues = (data) => {
  const city = document.querySelector('h2');
  const weatherCond = document.querySelector('.weatherCond');
  const weatherDesc = document.querySelector('.weatherDesc');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');

  city.textContent = data.name;
  weatherCond.textContent = data.weather[0].main;
  weatherDesc.textContent = data.weather[0].description;
  temp.textContent = data.main.temp;
  feelsLike.textContent = data.main.feels_like;
  humidity.textContent = data.main.humidity;
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