import { useSelector } from "react-redux";
import { getInfoIcons } from "../utils/iconMapper";

const InfoCard = ({ type }) => {
  // Returns info card with heading and data
  let data;
  const weatherData = useSelector((state) => state.weather);

  // Get data
  if (type === "MinTemp") data = `${weatherData.minTemp}°C`;
  else if (type === "MaxTemp") data = `${weatherData.maxTemp}°C`;
  else if (type === "Humidity") data = weatherData.humidity;
  else data = `${weatherData.wind} m/s`;

  return (
    <div className="info-card">
      <div className="info-card-data">{data}</div>
      {getInfoIcons()[type]}
    </div>
  );
};

export default InfoCard;
