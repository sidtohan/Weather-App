// Holds the current day
const dayReducer = (day = 0, action) => {
  switch (action.type) {
    case "UPDATE_DAY":
      return action.data;
    default:
      return day;
  }
};

export const updateDay = (day) => {
  return {
    type: "UPDATE_DAY",
    data: day,
  };
};
export default dayReducer;
