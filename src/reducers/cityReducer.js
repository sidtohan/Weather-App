const initialState = "Delhi";
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CITY":
      return action.data;
    default:
      return state;
  }
};

export const updateCity = (city) => {
  return {
    type: "UPDATE_CITY",
    data: city,
  };
};
export default cityReducer;
