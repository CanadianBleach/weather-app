const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Takes queried list item from weather api
export default class WeatherTile extends HTMLElement {
	constructor(day) {
		super();

		// Temp from kelvin
		let temp = Math.round((day.main.temp - 273.15) * 9 / 5 + 32);
		let windSpeed = Math.round(day.wind.speed);
		let humidity = Math.round(day.main.humidity);

		// Convert timestamp to date
		let date = new Date(day.dt_txt);

		// Format to mm/dd
		let mm = date.getMonth() + 1;
		let dd = date.getDate();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		let day_txt = days[date.getDay()];
		let month_txt = mm + '/' + dd;

		// Sets background if day is current
		let today = new Date();
		let bg = '';
		if (today.toDateString() == date.toDateString())
			bg='bg-light';
		
		this.innerHTML =
			`<div class="m-3 card ${bg} d-flex flex-column">
			<span class="d-inline-flex p-2 mb-2 justify-content-between">
			  <h3 class="m-1">${day_txt}</h3>
			  <h3 class="m-1">${month_txt}</h3>
			</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="currentColor" class="m-auto bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
			  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
			</svg>
			<span class="d-inline-flex mt-2 p-2 justify-content-between">
			  <h4 class="m-1">${temp}\u{00BA}</h4>
			  <h4 class="m-1">${humidity}%</h4>
			  <h4 class="m-1">${windSpeed}</h4>
			</span>
		  </div>`;
	}
}

if ('customElements' in window) {
	customElements.define('weather-tile', WeatherTile);
}