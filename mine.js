// JavaScript source code
let weather = {
	apikey: "a2f6745b1ea9678d1ef96a816bb071b9",
	fetchweather: function (city) {
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')"
		fetch("https://api.openweathermap.org/data/2.5/weather?q="
			+ city
			+ "&units=metric&APPID="
			+ this.apikey
		)
			.then(response => response.json())
			.then(data => this.displayweather(data))
			.catch(err => console.error(err));
	},
	  displayweather: function(data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		console.log(name, icon, description, temp, humidity, speed);
		  document.querySelector(".city").innerText = "Weather in " + name;
		  document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/' + icon +'@2x.png';
		  document.querySelector(".description").innerText = description;
		  document.querySelector(".temp").innerText = temp + '\u00B0'+ "C";
		  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
		  document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
	},
	search: function () {
		this.fetchweather(document.querySelector(".search-bar").value);
	}
};
document
	.querySelector(".search button")
	.addEventListener("click", function () {
		weather.search();
	});
document.querySelector(".search-bar").addEventListener("keyup", function () {
	if (event.key == "Enter") {
		weather.search();
	}
})
weather.fetchweather("New Delhi")
	