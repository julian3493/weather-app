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
}

export {setValues};