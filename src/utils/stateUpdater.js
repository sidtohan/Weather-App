// Action Creators
import { updateWeather } from "../reducers/weatherReducer";
import { updateCity } from "../reducers/cityReducer";
import { updateDaily } from "../reducers/dailyReducer";
import { updateDay } from "../reducers/dayReducer";

// Utils
import { dataMapper } from "../utils/dataMapper";

const updateState = (name, data, dispatch) => {
  // Update Data
  const weatherData = {
    temp: Math.round(data.current.temp) - 273,
    minTemp: Math.round(data.daily[0].temp.min) - 273,
    maxTemp: Math.round(data.daily[0].temp.max) - 273,
    condition: data.current.weather[0].main,
    humidity: data.current.humidity,
    wind: data.current.wind_speed,
  };

  // Daily Data
  const dailyData = data.daily.slice(0, 7).map(dataMapper);
  dailyData[0].temp = weatherData.temp;
  dailyData[0].humidity = weatherData.humidity;
  dailyData[0].wind = weatherData.wind;
  // Map current data for the first day

  // Dispatch
  dispatch(updateWeather(weatherData));
  dispatch(updateCity(name));
  dispatch(updateDaily(dailyData));
  dispatch(updateDay(0));
};

export default updateState;
