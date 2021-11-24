import Haze from "./assets/weather/haze.svg";
import Cloudy from "./assets/weather/cloudy.svg";
import Rain from "./assets/weather/rain.svg";
import Clear from "./assets/weather/clear.svg";
import Drizzle from "./assets/weather/drizzle.svg";
import Thunderstorm from "./assets/weather/thunderstorm.svg";

import Humidity from "./assets/humidity.svg";
import Wind from "./assets/wind.svg";
const imageHandler = () => {
  async function weatherIcon(data) {
    if (data == "Haze") return Haze;
    else if (data == "Rain") return Rain;
    else if (data == "Clear") return Clear;
    else if (data == "Clouds") return Cloudy;
    else if (data == "Drizzle") return Drizzle;
    else return Thunderstorm;
  }

  async function getHumidityImage() {
    return Humidity;
  }
  async function getWindImage() {
    return Wind;
  }
  return {
    weatherIcon,
    getHumidityImage,
    getWindImage,
  };
};

export default imageHandler;
