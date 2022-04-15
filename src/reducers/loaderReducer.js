// Toggles the loader
// Be default set to true for the initial data fetch
const loadingReducer = (loader = false, action) => {
  switch (action.type) {
    case "TOGGLE_LOADER":
      return !loader;
    default:
      return loader;
  }
};

export const toggleLoader = () => {
  return {
    type: "TOGGLE_LOADER",
  };
};

export default loadingReducer;
