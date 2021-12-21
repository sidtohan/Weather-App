const apiHandler = (() => {
  const apiLink = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "94a2aad4a38121e794735a95ee415a76";

  async function callApi(cityName) {
    document.body.appendChild(loadingHandler.returnLoading());
    const response = await fetch(apiLink + `q=${cityName}&appid=${apiKey}`, {
      mode: "cors",
    });
    if (!response.ok) {
      document.body.removeChild(document.querySelector(".loading-begin"));
      throw new Error(response.status);
    }
    const data = await response.json();
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

    fetchData.innerHTML = `
    <div class="loader">
    </div>`;

    loading.appendChild(fetchData);
    return loading;
  };
  return {
    returnLoading,
  };
})();

export default apiHandler;
