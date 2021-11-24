import Haze from "./assets/weather/haze.svg";
import Cloudy from "./assets/weather/cloudy.svg";
import Humidity from "./assets/humidity.svg";
import Wind from "./assets/wind.svg";

const imageHandler = () => {
  const weatherIcon = (data) => {
    if (data == "Haze") {
      return Haze;
    } else {
      return Cloudy;
    }
  };
  const getHumidityImage = () => {
    return Humidity;
  };
  const getWindImage = () => {
    return Wind;
  };
  return {
    weatherIcon,
    getHumidityImage,
    getWindImage,
  };
};

export default imageHandler;
