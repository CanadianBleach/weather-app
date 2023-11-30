import { key } from '../utils/key.js';
import { fetchData } from '../utils/utils.js';

let form = document.querySelector("#search");
let search = document.querySelector("#city");

// Create seatch object from string
function textToSearch(string) {
    let parsed = string.replaceAll(',', '');
    let words = parsed.split(' ');

    // In case its a single search
    if (words.length == 1) {
        words[1] = '';
    }

    let search = {
        city: words[0],
        state: words[1],
    }

    return search;
}

function saveCity(city) {
    let data = localStorage.getItem("city_history");
    let cities = JSON.parse(data);

    console.log(cities);

    if (cities == null) {
        cities = [
            city,
        ]
    } else {
        cities.unshift(city);
    }

    localStorage.setItem('city_history', JSON.stringify(cities))
}

// Search for city
async function searchFor(string) {
    let toSearch = textToSearch(string);
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${toSearch.city},${toSearch.state},USA&appid=${key}`;

    return await fetchData(url);
}

function init() {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Search for city
        let city = await searchFor(search.value);
        if (city == null)
            return;

        // Save city to local storage
        saveCity(city);

        // Go to weather page
        window.location.replace('../assets/pages/weather.html');
    });
}

init();

export { fetchData };