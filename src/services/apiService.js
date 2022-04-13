import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const geoEncode = async (city) => {
  // Returns the latitude and longitude of the city
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${key}`;
  const response = await axios.get(geoUrl);
  return {
    lat: response.data[0].lat,
    lon: response.data[0].lon,
    name: response.data[0].name,
  };
};

const getData = async (city) => {
  // Gets the weather data for the said city
  const { lat, lon, name } = await geoEncode(city);
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${key}`;
  const response = await axios.get(weatherUrl);
  return { ...response.data, name };
};
export default getData;
