import WeatherTile from './weather_tile.js'

let container = document.querySelector("#tile-parent");
let header = document.querySelector("h1");
let lat = 38.852;
let lon = 80.814;

// Maybe ill set it up as an enviornment variable
let key = '405cb79edbe390f6b9aaa5ccfb9e4af9';
let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

let weatherData = await fetchWeather(url);

header.textContent = `Weather - ${weatherData.city.name}`;

// Todo get the date parsed
// Get city search implemented
// Icon switching

// Create a tile for days we want
for (let i = 0; i < 6; i++) {
  container.appendChild(new WeatherTile(weatherData.list[i * 8]));
}

async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
