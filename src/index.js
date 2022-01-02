import apiHandler from "./apiLoadingHandler";
import handleParticles from "./particleHandler";
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

  const updateBackground = (cond) => {
    const sun = document.querySelector(".sun");
    const mainDisplay = document.querySelector(".main-display");
    sun.removeAttribute("style");
    if (cond == "Haze" || cond == "Smoke") {
      mainDisplay.style.background =
        "linear-gradient(rgb(198 198 198 / 50%), rgb(0 113 195 / 73%), rgb(17, 152, 250))";
      sun.style.boxShadow = "0 0 2px 0 rgb(255,255,0)";
    } else if (cond == "Mist" || cond == "Fog") {
      mainDisplay.style.background = "linear-gradient(silver, #0095ff)";
      sun.style.boxShadow = "0 0 3px 0 rgb(255,255,0)";
    } else if (cond == "Snow") {
      mainDisplay.style.background = "rgb(139,175,199)";
      sun.style.opacity = 0.9;
    } else if (cond == "Clouds") {
      mainDisplay.style.background =
        "linear-gradient(rgb(87, 92, 95), rgb(121,117,117))";
      sun.setAttribute(
        "style",
        "opacity: 0.7; box-shadow:0 0 2px 0px rgb(255,255,0);"
      );
    } else if (cond == "Rain") {
      mainDisplay.style.background = "rgb(5, 43, 69)";
      sun.setAttribute(
        "style",
        "opacity: 0.8; box-shadow:0 0 2px 0px rgb(255,255,0);"
      );
    } else if (cond == "Drizzle") {
      mainDisplay.style.background = "rgb(67,89,104)";
      sun.setAttribute(
        "style",
        `opacity: 0.8;
      box-shadow: 0 0 2px 1px rgb(255,255,0)`
      );
    } else if (cond == "Thunderstorm") {
      mainDisplay.style.background = "rgb(1,14,24)";
    } else {
      mainDisplay.removeAttribute("style");
    }
    handleParticles.evaluate(cond);
  };

  const updateData = (data) => {
    weatherDisplay.innerHTML = "";

    const tempInfo = document.createElement("div");
    tempInfo.classList.add("temp-info");

    const sun = document.createElement("div");
    sun.classList.add("sun");

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temp-data");
    tempDiv.appendChild(returnCurrentTemp(data["main"]["temp"]));
    tempDiv.appendChild(returnMinTemp(data["main"]["temp_min"]));
    tempDiv.appendChild(returnMaxTemp(data["main"]["temp_max"]));

    tempInfo.appendChild(tempDiv);
    tempInfo.appendChild(returnCondition(data["weather"][0]["main"]));
    tempInfo.appendChild(returnCityName(data["name"]));

    weatherDisplay.appendChild(sun);
    weatherDisplay.appendChild(tempInfo);

    updateBackground(data["weather"][0]["main"]);

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

  function handleError(err) {
    console.log(err);
    const errorDiv = document.createElement("div");
    if (err.message == "404") {
      errorDiv.textContent = "Invalid City Name";
    } else {
      errorDiv.textContent = "Empty Input";
    }
    errorDiv.classList.add("display-error");
    errorDiv.addEventListener("animationend", (e) => {
      document.body.removeChild(errorDiv);
    });
    document.body.appendChild(errorDiv);
    return;
  }
  function passCityName(e) {
    inputForm.elements[0].blur();
    const cityName = getCityName();
    const errorDiv = document.querySelector(".display-error");
    if (errorDiv) {
      document.body.removeChild(errorDiv);
    }
    e.preventDefault();

    if (cityName == "") {
      handleError(new Error("Empty"));
      inputForm.reset();
      return;
    }
    apiHandler
      .callApi(cityName)
      .then((data) => {
        displayHandler().updateData(data);
      })
      .catch((error) => {
        handleError(error);
      });
    inputForm.reset();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  apiHandler
    .callApi("New Delhi")
    .then((data) => displayHandler().updateData(data))
    .catch((error) => {});
});
window.addEventListener("DOMContentLoaded", formHandler);
