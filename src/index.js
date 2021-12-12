import apiHandler from "./apiLoadingHandler";
import imageHandler from "./imageHandler";
import "./main.css";

const displayHandler = () => {
  const weatherDisplay = document.querySelector(".weather-display");
  
  const returnCondition = (cond) => {
    const condDiv = document.createElement("div");
    condDiv.textContent = cond;
    condDiv.classList.add("display-condition");
    return condDiv;
  };

  const returnCityName = (name) => {
    const nameDiv = document.createElement("div");
    nameDiv.textContent = name;
    nameDiv.classList.add("display-city-name");
    return nameDiv;
  };

  const returnCurrentTemp = (temp) => {
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("display-current-temp");
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




  const updateData = (data) => {
    weatherDisplay.innerHTML = "";
    console.log(data);

    const tempInfo = document.createElement("div");
    tempInfo.classList.add("temp-info");

    const sun = document.createElement("div");
    sun.classList.add("sun");

    tempInfo.appendChild(returnCurrentTemp(data["main"]["temp"]));
    tempInfo.appendChild(returnCondition(data["weather"][0]["main"]));
    tempInfo.appendChild(returnCityName(data["name"]));

    weatherDisplay.appendChild(sun);
    weatherDisplay.appendChild(tempInfo);

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
    return inputForm.elements[0].value;
  }

  function passCityName(e) {
    const cityName = getCityName();
    e.preventDefault();

    if (cityName == "") {
      console.log("Empty");
      inputForm.reset();
      return;
    }
    apiHandler
      .callApi(cityName)
      .then((data) => {
        displayHandler().updateData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    inputForm.reset();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  apiHandler
    .callApi("New Delhi")
    .then((data) => displayHandler().updateData(data))
    .catch((error) => {
      console.log(error);
    });
});
window.addEventListener("DOMContentLoaded", formHandler);
