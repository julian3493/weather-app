const getData = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=70c8ad9d3ce4e9eba23caf221443c534`, { mode: 'cors' });
  const data = await response.json();
  console.log(data);
}

getData('Bogota');