function updateWeatherInfo(response) {
  let refreshTemp = document.querySelector("#currentTemp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#cityName");
  let countryElement = document.querySelector("#countryName");
  let conditionsElement = document.querySelector("#conditions");
  let feelsLikeElement = document.querySelector("#feelsLike");
  let feelsTemp = response.data.temperature.feels_like;
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let wind = response.data.wind.speed;

  refreshTemp.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  conditionsElement.innerHTML = response.data.condition.description;
  feelsLikeElement.innerHTML = Math.round(feelsTemp);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(wind);
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "a7ftc20e6332a5fbb4e6e025bb1oaa93";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function newCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", newCity);

searchCity("Maarssen");
