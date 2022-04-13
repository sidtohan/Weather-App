import { useSelector } from "react-redux";

const InfoCard = ({ type }) => {
  // Returns info card with heading and data
  let data;
  const weatherData = useSelector((state) => state.weather);

  // Get data
  if (type === "MinTemp") data = weatherData.minTemp;
  else if (type === "MaxTemp") data = weatherData.maxTemp;
  else if (type === "Humidity") data = weatherData.humidity;
  else data = weatherData.wind;

  return (
    <div className="info-card">
      <h2 className="info-card-heading">{type}</h2>
      <div className="info-card-data">{data}</div>
    </div>
  );
};

export default InfoCard;
