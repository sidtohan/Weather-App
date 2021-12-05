import apiHandler from "./apiLoadingHandler";
import imageHandler from "./imageHandler";
import "./main.css";

const displayHandler = () => {
  const weatherDisplay = document.querySelector(".weather-display");
  const castText = document.querySelector(".cast");
  const humidityDiv = document.querySelector(".humidity");
  const windDiv = document.querySelector(".wind");

  const returnImage = async (condition) => {
    const imageData = await imageHandler().weatherIcon(condition);
    const newImg = new Image();
    newImg.src = imageData;
    return newImg;
  };

  const returnCurrentTemp = (temp) => {
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");
    currentTemp.textContent = `${Math.round(temp - 273)}°C`;
    return currentTemp;
  };

  const returnMaxTemp = (temp) => {
    const maxTemp = document.createElement("div");
    maxTemp.classList.add("max-temp");

    imageHandler()
      .getUpTriangle()
      .then((dat) => {
        const newImage = new Image();
        newImage.src = dat;
        newImage.classList.add("max-temp-logo");
        maxTemp.appendChild(newImage);
      });
    maxTemp.textContent = `${Math.round(temp - 273)}°C`;
    return maxTemp;
  };

  const returnMinTemp = (temp) => {
    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp");
    imageHandler()
      .getDownTriangle()
      .then((dat) => {
        const newImage = new Image();
        newImage.src = dat;
        newImage.classList.add("min-temp-logo");
        minTemp.appendChild(newImage);
      });
    minTemp.textContent = `${Math.round(temp - 273)}°C`;
    return minTemp;
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
    console.log(data);

    const cast = document.createElement("div");
    const info = document.createElement("div");
    const minMaxTemp = document.createElement("div");
    const whiteBlock = document.createElement("div");
    const infoHolder = document.createElement("div");
    const cityName = document.createElement("h2");
    const castName = document.createElement("h2");

    cast.classList.add("cast-display");
    info.classList.add("info-display");
    minMaxTemp.classList.add("min-max-temp");
    whiteBlock.classList.add("white-block");
    infoHolder.classList.add("info-holder");
    cityName.classList.add("display-city-name");
    castName.classList.add("display-cast-name");

    // need to await here cuz of the possible image delays
    const imgDat = await returnImage(data["weather"][0]["main"]);
    cast.appendChild(imgDat);
    info.appendChild(returnCurrentTemp(data["main"]["temp"]));
    minMaxTemp.appendChild(returnMaxTemp(data["main"]["temp_max"]));
    minMaxTemp.appendChild(returnMinTemp(data["main"]["temp_min"]));
    // updateCast(data["weather"][0]["main"]);
    // updateHumidity(data["main"]["humidity"]);
    // updateWind(data["wind"]["speed"]);

    cityName.textContent = data["name"];
    castName.textContent = data["weather"][0]["main"];
    info.appendChild(whiteBlock);
    info.appendChild(minMaxTemp);

    infoHolder.appendChild(cityName);
    infoHolder.appendChild(info);
    infoHolder.appendChild(castName);
    weatherDisplay.appendChild(cast);
    weatherDisplay.appendChild(infoHolder);
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
