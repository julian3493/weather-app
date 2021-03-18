const setImg = async () => {
  const weather = document.querySelector('.weatherDesc');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=y9P7QsV48ORtj9edb96XJsOGRA8n9Is8&s=${weather.textContent}`, { mode: 'cors' });
  const catData = await response.json();
  const div = document.querySelector('.img');
  const img = document.querySelector('img');
  img.src = catData.data.images.original.url;
  div.appendChild(img);
};

export default setImg;