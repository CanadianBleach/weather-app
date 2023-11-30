import WeatherTile from '../utils/weather_tile.js';
import { key } from '../utils/key.js';
import { fetchData } from '../utils/utils.js';

let container = document.querySelector("#tile-parent");
let header = document.querySelector("h1");
let searchHistory = document.querySelector("#history");

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

function saveCities(list) {
  let data = localStorage.getItem("city_history");
  let cities = JSON.parse(data);

  if (cities == null)
    return;

  localStorage.setItem('city_history', JSON.stringify(list))
}

function cycleWeather() {
  console.log(searches);
  let index = document.activeElement.id;
  let element = searches[index];
  searches.splice(index, 1);
  searches.unshift(element);
  saveCities(searches);
  location.reload();
}

function init() {
  // Create a tiles for days we want
  for (let i = 0; i < 5; i++) {
    let elem = new WeatherTile(weatherData.list[i * 8]);
    elem.classList.add("col-sm");
    container.appendChild(elem);
  }
  
  // Move current city to back of list
  let removed = searches.shift()

  for (let s in searches) {
    // Create and populate button
    let element = document.createElement("button");
    element.classList.add("btn", "m-2");
    element.id = s;
    element.textContent = searches[s][0].name;

    // Add event listener
    element.addEventListener("click", cycleWeather);

    searchHistory.appendChild(element);
  }

  // Add element back
  searches.push(removed);
}

init();