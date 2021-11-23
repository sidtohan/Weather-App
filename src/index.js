import apiHandler from "./apiHandler";
import imageHandler from "./imageHandler";

import "./stylesheets/header.css";
import "./stylesheets/display.css";
import "./stylesheets/main.css";

// passing the apiHandler object into formHandler directly
const displayHandler = () => {
  const cast = document.querySelector(".cast-display");
  console.log(cast);

  const updateData = (data) => {
    const imageData = imageHandler(data);
    const newImg = new Image();

    newImg.src = imageData;

    cast.innerHTML = "";
    cast.appendChild(newImg);
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
