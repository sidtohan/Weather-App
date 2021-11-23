import Haze from "./assets/weather/haze.svg";
import Cloudy from "./assets/weather/cloudy.svg";

const imageHandler = (data) => {
  if (data["weather"][0]["main"] == "Haze") {
    return Haze;
  } else {
    return Cloudy;
  }
};

export default imageHandler;
