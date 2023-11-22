import WeatherTile from './weather_tile.js'

let container = document.querySelector("#tile-parent");

container.appendChild(new WeatherTile(true));

for (let i = 0; i < 3; i++) {
    container.appendChild(new WeatherTile());
}