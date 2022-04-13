// Holds the daily forecast
const dailyReducer = (dailyData = [], action) => {
  switch (action.type) {
    case "UPDATE_DAILY":
      return action.data;
    default:
      return dailyData;
  }
};

export const updateDaily = (data) => {
  return {
    type: "UPDATE_DAILY",
    data,
  };
};

export default dailyReducer;
