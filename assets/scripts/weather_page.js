import WeatherTile from '../utils/weather_tile.js';
let key = '405cb79edbe390f6b9aaa5ccfb9e4af9';

let container = document.querySelector("#tile-parent");
let header = document.querySelector("h1");
let lat = 38.852;
let lon = 80.814;

let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

let weatherData = await fetchWeather(url);

header.textContent = `Weather - ${weatherData.city.name}`;

// Todo get the date parsed
// Get city search implemented
// Icon switching

async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function getSearches() {
  let data = localStorage.getItem("search_history");
  let searches = JSON.parse(data);

  return searches;
}

function init() {
  let searches = getSearches();
  console.log(searches);

  // Todo search for city

  // Cards for past searches
  // Buttons, remove search from array -> push to top -> reload page
  // If we wanna be cheeky, cards would be cooler fs but kinda a pain

  // Create a tile for days we want
  for (let i = 0; i < 5; i++) {
    let elem = new WeatherTile(weatherData.list[i * 8]);
    elem.classList.add("col-sm");
    container.appendChild(elem);
  }

}

init();