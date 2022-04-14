// Returns the corresponding icon to the given
// weather condition
import { Icon } from "@iconify/react";
const getIconName = (condition) => {
  switch (condition) {
    case "clear":
      return "fluent:weather-sunny-48-filled";

    case "clouds":
      return "fluent:weather-cloudy-48-filled";

    case "rain":
      return "fluent:weather-rain-48-filled";

    case "drizzle":
      return "fluent:weather-drizzle-48-filled";

    case "snow":
      return "fluent:weather-snow-48-filled";

    case "ash":
      return "mdi:volcano";
    case "thunderstorm":
      return "fluent:weather-thunderstorm-48-filled";

    case "haze":
      return "fluent:weather-haze-48-filled";

    case "fog":
    case "smoke":
    case "mist":
      return "fluent:weather-fog-48-filled";

    case "squall":
      return "fluent:weather-squalls-48-filled";

    case "tornado":
      return "fa6-solid:tornado";

    case "dust":
      return "fluent:weather-duststorm-48-filled";
  }
};
const iconMapper = (condition) => {
  condition = condition.toLowerCase();
  const iconName = getIconName(condition);
  return <Icon icon={iconName} className="main-card-weather-icon" />;
};

export const getSearch = () => {
  return <Icon icon="akar-icons:search" />;
};
export const getLeftRightArrow = () => {
  return {
    left: <Icon icon="bxs:left-arrow" />,
    right: <Icon icon="bxs:right-arrow" />,
  };
};
export default iconMapper;
