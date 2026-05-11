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
  let emojiElement = document.querySelector("#emoji");
  let dateElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);

  emojiElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="mainEmoji" />`;
  refreshTemp.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  conditionsElement.innerHTML = response.data.condition.description;
  feelsLikeElement.innerHTML = Math.round(feelsTemp);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(wind);
  dateElement.innerHTML = dateFormatted(date);
  console.log(response.data);
}

function dateFormatted(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
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

function forecastFormat() {
  let days = ["Tues", "Wed", "Thurs", "Fri", "Sat"];
  let fullForecast = "";

  days.forEach(function (day) {
    fullForecast =
      fullForecast +
      `<div class="forecastDay">
          <div class="forecastDate">${day}</div>
          <div class="forecastIcon">☁️</div>
          <div class="forecastTemp">
            <div class="forecastTemps"><span class="bold">19°</span></div>
            <div class="forecastTemps">15°</div>
          </div>
        </div>`;
  });
}
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = fullForecast;

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", newCity);

searchCity("Maarssen");
forecastFormat();
