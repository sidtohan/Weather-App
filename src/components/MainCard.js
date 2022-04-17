import { useSelector } from "react-redux";
import { dayMapper } from "../utils/dataMapper";
import Search from "./Search";
import Switcher from "./Switcher";
import iconMapper from "../utils/iconMapper";

const MainCard = () => {
  // Main Card component
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);

  return (
    <div className="main-card">
      <Search />
      <div className="main-card-info">
        <h2 className="main-card-heading">{city.toUpperCase()}</h2>
        {iconMapper(weather.condition)}
        <div className="main-card-condition">{weather.condition}</div>
        <div className="main-card-temperature">{weather.temp}°C</div>
        <Switcher />
      </div>
    </div>
  );
};

export default MainCard;
