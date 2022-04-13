// handles weather and other info
const initialState = {
  temp: 45,
  minTemp: 34,
  maxTemp: 48,
  condition: "Sunny",
};

const weatherReducer = (state = initialState, action) => {
  // Handles updation of data
  switch (action.type) {
    case "UPDATE_DATA": {
      return action.data;
    }
    default:
      return state;
  }
};

export const updateWeather = (data) => {
  return {
    type: "UPDATE_DATA",
    data,
  };
};
export default weatherReducer;
