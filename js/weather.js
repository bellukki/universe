const API_KEY = config.apikey;
const GGMSO = "material-symbols-outlined";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weatherIT span:first-child");
      const temp = document.querySelector("#weatherIT span:last-child");
      const city = document.querySelector("#weathercity span");
      const crWeather = data.weather[0].id;
      weather.classList.add(GGMSO);
      if (crWeather === 800) {
        weather.innerText = "clear_day";
      } else if (800 < crWeather < 900) {
        weather.innerText = "cloud";
      } else if (500 < crWeather < 600 || 300 < crWeather < 400) {
        weather.innerText = "rainy";
      } else if (200 < crWeather < 300) {
        weather.innerText = "thunderstorm";
      } else if (600 < crWeather < 700) {
        weather.innerText = "cloudy_snowing";
      } else if (700 < crWeather < 800) {
        weather.innerText = "mist";
      }
      temp.innerText = `${data.main.temp}°C`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
