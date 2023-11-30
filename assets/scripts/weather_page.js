import WeatherTile from '../utils/weather_tile.js';
import { key } from '../utils/key.js';
import { fetchData } from '../utils/utils.js';

let container = document.querySelector("#tile-parent");
let header = document.querySelector("h1");

// Search for city
let searches = getCities();

if (searches == null)
  console.log("HELP ME");
// Get weather for first city
let cities = searches[0];
let city = cities[0];

let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${key}`;

header.textContent = `Weather - ${city.name}`;
let weatherData = await fetchData(url);

// Icon switching

// Gets cities from local storage
function getCities() {
  let data = localStorage.getItem("city_history");
  let searches = JSON.parse(data);

  return searches;
}

function init() {
  // Create a tiles for days we want
  for (let i = 0; i < 5; i++) {
    let elem = new WeatherTile(weatherData.list[i * 8]);
    elem.classList.add("col-sm");
    container.appendChild(elem);
  }
}

init();