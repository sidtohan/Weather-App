import Haze from "./assets/weather/haze.svg";
import Cloudy from "./assets/weather/cloudy.svg";
import Humidity from "./assets/humidity.svg";

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
  return {
    weatherIcon,
    getHumidityImage,
  };
};

export default imageHandler;
