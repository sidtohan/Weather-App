import { useSelector } from "react-redux";
import iconMapper from "../utils/iconMapper";

const MainCard = () => {
  // Main Card component
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);

  return (
    <div className="main-card">
      <div className="main-card-info">
        <h2 className="main-card-heading">{city.toUpperCase()}</h2>
        <div className="main-card-temperature">{weather.temp}°C</div>
        <div className="main-card-weather-icon">
          {iconMapper(weather.condition)}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
