let city = ''

const getWeatherData = (city) => {
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f96cc41c33mshcf3f210bd6c9f36p1c3feajsn6577c703511f',
    'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
  }
};

return fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`, options)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err));
}




window.onload = function() { // can also use window.addEventListener('load', (event) => {
  document.body.style.opacity = 1;
};

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  console.log(data)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = weatherData.days[0].temp
  document.getElementById('min-temp').innerText = weatherData.days[0].tempmin
  document.getElementById('max-temp').innerText = weatherData.days[0].tempmax
  let capitalWeather = weatherData.currentConditions.icon.toUpperCase()
  document.getElementById('weather-type').innerText = `${capitalWeather} , ${weatherData.description}`
  document.getElementById('city-name').innerText = weatherData.resolvedAddress
}

// console.log(data.days[0].temp,
//     data.currentConditions.humidity,
//     data.currentConditions.conditions,
//     data.days[0].tempmax,
//     data.days[0].tempmin,
//     data.currentConditions.icon,
//     data.description)
