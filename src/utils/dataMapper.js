// Converts raw response data to a uniform format
const computeAverageTemp = (...a) => {
  let sum = 0;
  for (let num of a) {
    sum += num;
  }
  return Math.round(sum / a.length);
};

const convertToCel = (temp) => Math.round(temp) - 273;
const dataMapper = (day, i) => {
  const minTemp = convertToCel(day.temp.min);
  const maxTemp = convertToCel(day.temp.max);
  const temp = computeAverageTemp(minTemp, maxTemp);
  const condition = day.weather[0].main;
  const humidity = day.humidity;
  const date = dayMapper(i);
  const feelsLike = computeAverageTemp(
    convertToCel(day.feels_like.day),
    convertToCel(day.feels_like.night),
    convertToCel(day.feels_like.eve),
    convertToCel(day.feels_like.morn)
  );
  return {
    temp,
    minTemp,
    maxTemp,
    feelsLike,
    condition,
    humidity,
    date,
  };
};

// Converts day index to day name
const dayMapper = (day) => {
  if (day === 0) {
    return "Today";
  } else if (day === 1) {
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
