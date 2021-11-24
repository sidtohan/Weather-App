const loadingHandler = (() => {
  const loading = document.querySelector(".loading-begin");
  const addLoading = () => {
    loading.classList.add("active");
    return;
  };
  const removeLoading = () => {
    loading.classList.remove("active");
  };
  return {
    addLoading,
    removeLoading,
  };
})();

export default loadingHandler;
