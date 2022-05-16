import InfoCard from "./InfoCard";

const InfoHolder = () => {
  // Returns a div containing all the info cards
  return (
    <div className="info-card-holder">
      <InfoCard type="FeelsLike" index={1} />
      <InfoCard type="Humidity" index={2} />
      <InfoCard type="MinTemp" index={3} />
      <InfoCard type="MaxTemp" index={4} />
    </div>
  );
};

export default InfoHolder;
