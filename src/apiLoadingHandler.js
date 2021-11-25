const apiHandler = (() => {
  let first = true;
  const apiLink = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "94a2aad4a38121e794735a95ee415a76";

  async function callApi(cityName) {
    const weatherDisplay = document.querySelector(".weather-display");
    weatherDisplay.innerHTML = "";
    if (first) {
      document.body.removeChild(document.querySelector(".loading-begin"));
      document.body.appendChild(loadingHandler.returnLoading());
      first = false;
    } else {
      document.body.appendChild(loadingHandler.returnLoading());
    }
    const response = await fetch(apiLink + `q=${cityName}&appid=${apiKey}`, {
      mode: "cors",
    });
    const data = await response.json();
    document.body.removeChild(document.querySelector(".loading-begin"));
    return data;
  }

  return {
    callApi,
  };
})();

const loadingHandler = (() => {
  const returnLoading = () => {
    const loading = document.createElement("div");
    const fetchData = document.createElement("div");

    loading.classList.add("loading-begin");
    fetchData.classList.add("text");

    fetchData.textContent = "Fetching Data";

    loading.appendChild(fetchData);
    return loading;
  };
  return {
    returnLoading,
  };
})();

export default apiHandler;
