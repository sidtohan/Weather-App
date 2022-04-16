// If error is to be shown
const errorReducer = (error = null, action) => {
  switch (action.type) {
    case "TOGGLE_ERROR":
      return action.data;
    default:
      return error;
  }
};

export const toggleError = (error) => {
  return {
    type: "TOGGLE_ERROR",
    data: error,
  };
};

export default errorReducer;
