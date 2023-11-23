export default class WeatherTile extends HTMLElement {
	constructor(currentDay, maxTemp = 0, minTemp = 0) {
		super();

		let str = '';
		if (currentDay)
			str='bg-light';

		this.innerHTML =
			`<div class="m-3 col card ${str} d-flex flex-column">
			<span class="d-inline-flex mb-4 justify-content-between">
			  <h3 class="m-1">Thu</h3>
			  <h3 class="m-1">10/4</h3>
			</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" class="m-auto bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
			  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
			</svg>
			<span class="d-inline-flex mt-3 justify-content-between">
			  <h3 class="m-1">${maxTemp}</h3>
			  <h3 class="m-1">${minTemp}</h3>
			</span>
		  </div>`;
	}
}

if ('customElements' in window) {
	customElements.define('weather-tile', WeatherTile);
}