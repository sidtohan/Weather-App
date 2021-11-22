const formHandler = (apiHandler) => {
  const inputForm = document.forms[0];
  inputForm.onsubmit = passCityName;

  function getCityName() {
    return inputForm.elements[0];
  }

  function passCityName(e) {
    const cityName = getCityName();
    e.preventDefault();

    apiHandler.callApi(cityName.value);

    inputForm.reset();
  }
};

export default formHandler;
