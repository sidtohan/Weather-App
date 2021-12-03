import apiHandler from "./apiLoadingHandler";
import imageHandler from "./imageHandler";
import "./main.css";

const displayHandler = () => {
  const weatherDisplay = document.querySelector(".weather-display");
  const minTemp = document.querySelector(".min-temp");
  const maxTemp = document.querySelector(".max-temp");
  const castText = document.querySelector(".cast");
  const humidityDiv = document.querySelector(".humidity");
  const windDiv = document.querySelector(".wind");

  const returnImage = async (condition) => {
    const imageData = await imageHandler().weatherIcon(condition);
    const newImg = new Image();
    newImg.src = imageData;
    console.log(newImg);
    return newImg;
  };

  const returnCurrentTemp = (temp) => {
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");
    currentTemp.textContent = `${Math.round(temp - 273)}°C`;
    return currentTemp;
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

  const updateWind = (wind) => {
    windDiv.innerHTML = "";
    windDiv.textContent = wind;
  };

  const updateData = async (data) => {
    /*
    const info = `
    <div class="info-display">
      <div class="current-temp"></div>
      <div class="info">
        <div class="cast-temp">
          <div class="cast"></div>
          <div class="max-temp"></div>
          <div class="min-temp"></div>
        </div>
        <div class="misc">
          <div class="humidity"></div>
          <div class="wind"></div>
        </div>
      </div>
    </div>`*/
    const cast = document.createElement("div");
    const info = document.createElement("div");
    cast.classList.add("cast-display");
    info.classList.add("info-display");

    const imgDat = await returnImage(data["weather"][0]["main"]);
    cast.appendChild(imgDat);
    info.appendChild(returnCurrentTemp(data["main"]["temp"]));
    // updateMaxTemp(data["main"]["temp_max"]);
    // updateMinTemp(data["main"]["temp_min"]);
    // updateCast(data["weather"][0]["main"]);
    // updateHumidity(data["main"]["humidity"]);
    // updateWind(data["wind"]["speed"]);

    
    weatherDisplay.appendChild(cast);
    weatherDisplay.appendChild(info);
    document.body.removeChild(document.querySelector(".loading-begin"));
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

window.addEventListener("DOMContentLoaded", formHandler);
