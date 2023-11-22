import WeatherTile from './weather_tile.js'

let container = document.querySelector("#tile-parent");

for (let i = 0; i < 4; i++) {
    container.appendChild(new WeatherTile());
}