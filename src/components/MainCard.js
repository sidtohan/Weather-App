import { useSelector } from "react-redux";
import iconMapper from "../utils/iconMapper";
import { dayMapper } from "../utils/dataMapper";

const MainCard = () => {
  // Main Card component
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  const day = useSelector((state) => state.day);
  const displayDay = dayMapper(day);

  return (
    <>
      <h2 className="city-name">{city.toUpperCase()}</h2>
      <div className="main-card">
        <h2 className="main-card-day">{displayDay}</h2>
        <div className="main-card-temperature">
          {weather.temp}
          <sup>°C</sup>
        </div>
        {iconMapper(weather.condition)}
        <div className="main-card-condition">{weather.condition}</div>
      </div>
    </>
  );
};

export default MainCard;
