export default class WeatherTile extends HTMLElement {
	constructor () {
		super();
		console.log('Constructed', this);

        this.innerHTML =
		`<p>
			<button>Hi there!</button>
		</p>
		<div class="message" aria-live="polite"></div>`;
	}
}

if ('customElements' in window) {
	customElements.define('weather-tile', WeatherTile);
}