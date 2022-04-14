import InfoCard from "./InfoCard";

const InfoHolder = () => {
  // Returns a div containing all the info cards
  return (
    <div className="info-card-holder">
      <InfoCard type="MinTemp" />
      <InfoCard type="MaxTemp" />
      <InfoCard type="Humidity" />
      <InfoCard type="Wind" />
    </div>
  );
};

export default InfoHolder;
