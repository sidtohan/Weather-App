import InfoCard from "./InfoCard";

const InfoHolder = () => {
  // Returns a div containing all the info cards
  return (
    <div className="info-card-holder">
      <InfoCard type="FeelsLike" />
      <InfoCard type="Humidity" />
      <InfoCard type="MinTemp" />
      <InfoCard type="MaxTemp" />
    </div>
  );
};

export default InfoHolder;
