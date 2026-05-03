function newCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", newCity);
