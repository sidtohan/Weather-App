import { useSelector } from "react-redux";
import { dayMapper } from "../utils/dataMapper";
import Search from "./Search";
import Switcher from "./Switcher";

const MainCard = () => {
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  const day = useSelector((state) => state.day);

  // Convert day to word form
  const dayName = dayMapper(day);

  return (
    <div className="main-card">
      <Search />
      <h2 className="main-card-city-name">{city}</h2>
      <div className="main-card-info">
        <div className="main-card-condition">{weather.condition}</div>
        <div className="main-card-temperature">{weather.temp}</div>
        <div className="main-card-day">{dayName}</div>
      </div>
      <Switcher />
    </div>
  );
};

export default MainCard;
