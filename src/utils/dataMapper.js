// Converts raw response data to a uniform format
const computeAverageTemp = (a, b) => {
  return Math.round((a + b) / 2);
};

const dataMapper = (day, i) => {
  const minTemp = Math.round(day.temp.min) - 273;
  const maxTemp = Math.round(day.temp.max) - 273;
  const temp = computeAverageTemp(minTemp, maxTemp);
  const condition = day.weather[0].main;
  return {
    temp,
    minTemp,
    maxTemp,
    condition,
  };
};

const dayMapper = (day) => {
  if (day == 0) {
    return "Today";
  } else if (day == 1) {
    return "Tomorrow";
  } else {
    const currentDate = new Date();
    const stringDate = `${
      currentDate.getDate() + day
    }/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
    return stringDate;
  }
};

export { dataMapper, dayMapper };
