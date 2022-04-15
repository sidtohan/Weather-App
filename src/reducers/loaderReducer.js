// Toggles the loader
// Be default set to true for the initial data fetch
const loadingReducer = (loader = true, action) => {
  switch (action.type) {
    case "ON_LOADER":
      return true;
    case "OFF_LOADER":
      return false;
    default:
      return loader;
  }
};

export const loaderOn = () => {
  return {
    type: "ON_LOADER",
  };
};

export const loaderOff = () => {
  return {
    type: "OFF_LOADER",
  };
};
export default loadingReducer;
