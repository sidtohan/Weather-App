import apiHandler from "./apiHandler";
import imageHandler from "./imageHandler";
import loadingHandler from "./loadingHandler";

import "./stylesheets/header.css";
import "./stylesheets/display.css";
import "./stylesheets/main.css";
import "./stylesheets/responsive.css";
import "./stylesheets/loading.css";


const displayHandler = () => {
  const cast = document.querySelector(".cast-display");
  const weatherDisplay = document.querySelector(".weather-display");
  const currentTemp = document.querySelector(".current-temp");
  const minTemp = document.querySelector(".min-temp");
  const maxTemp = document.querySelector(".max-temp");
  const castText = document.querySelector(".cast");
  const humidityDiv = document.querySelector(".humidity");
  const windDiv = document.querySelector(".wind");

  const updateImage = (condition) => {
    imageHandler()
      .weatherIcon(condition)
      .then((imageData) => {
        const newImg = new Image();
        newImg.src = imageData;

        cast.innerHTML = "";
        cast.appendChild(newImg);

        return;
      });
  };

  const updateCurrentTemp = (temp) => {
    currentTemp.innerHTML = "";
    currentTemp.textContent = `${Math.round(temp - 273)}°C`;
    return;
  };

  const updateMaxTemp = (temp) => {
    maxTemp.textContent = `${Math.round(temp - 273)}°C(Max)`;
    return;
  };

  const updateMinTemp = (temp) => {
    minTemp.textContent = `${Math.round(temp - 273)}°C(Min)`;
    return;
  };

  const updateCast = (cast) => {
    castText.textContent = cast;
    return;
  };

  const updateHumidity = (humidity) => {
    humidityDiv.innerHTML = "";
    humidityDiv.textContent = humidity;

    imageHandler()
      .getHumidityImage()
      .then((imageData) => {
        const humidityLogo = new Image();
        humidityLogo.src = imageData;
        humidityDiv.appendChild(humidityLogo);
        return;
      });
  };

  const removeLoading = () => {
    loadingHandler.removeLoading();
    weatherDisplay.classList.remove("hidden");
  };

  const updateWind = (wind) => {
    windDiv.innerHTML = "";
    windDiv.textContent = wind;

    imageHandler()
      .getWindImage()
      .then((imageData) => {
        const windLogo = new Image();
        windLogo.src = imageData;
        windDiv.appendChild(windLogo);
        removeLoading();
        return;
      });
  };

  const updateData = (data) => {
    console.log(data);

    loadingHandler.addLoading();
    weatherDisplay.classList.add("hidden");
    updateImage(data["weather"][0]["main"]);
    updateCurrentTemp(data["main"]["temp"]);
    updateMaxTemp(data["main"]["temp_max"]);
    updateMinTemp(data["main"]["temp_min"]);
    updateCast(data["weather"][0]["main"]);
    updateHumidity(data["main"]["humidity"]);
    updateWind(data["wind"]["speed"]);
    return;
  };
  return {
    updateData,
  };
};

const formHandler = () => {
  const inputForm = document.forms[0];
  inputForm.onsubmit = passCityName;

  function getCityName() {
    return inputForm.elements[0];
  }

  function passCityName(e) {
    const cityName = getCityName();
    e.preventDefault();

    apiHandler
      .callApi(cityName.value)
      .then((data) => displayHandler().updateData(data))
      .catch((error) => {
        console.log(error);
      });
    inputForm.reset();
  }
};

formHandler();
