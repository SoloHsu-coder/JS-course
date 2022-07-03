const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time"); // image tag that has class named time
const icon = document.querySelector(".icon img"); // image under the tag that has class named icon
const updateUI = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  const { cityDets, weather } = data; // destructure property

  //update details template

  details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
    `;
  //update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  // if (weather.IsDayTime) {
  //   timeSrc = "img/day.svg";
  // } else {
  //   timeSrc = "img/night.svg";
  // }
  time.setAttribute("src", timeSrc);
  //remove the d-none

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets,
    weather, //obj shortand notation , property name and value name equal can write only once
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update UI with new city
  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));

  //set local storage
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
