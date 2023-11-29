let url = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=`;

let form = document.querySelector("#search");
let search = document.querySelector("#city");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveSearch(textToSearch(search.value));
    window.location.replace('../assets/pages/weather.html');
});

// Create seatch object from string
function textToSearch(string) {
    let parsed = string.replaceAll(',','');
    let words = parsed.split(' ');

    // In case its a single search
    if (words.length == 1) {
        words[1] = '';
    }

    let search = {
        city : words[0],
        state : words[1],
    }

    return search;
}

function saveSearch(search) {
    let data = localStorage.getItem("search_history");
    let searches = JSON.parse(data);

    if (searches == null) {
        searches = [
            search,
        ]
    } else {
        searches.unshift(search);
    }

    localStorage.setItem('search_history', JSON.stringify(searches))
}