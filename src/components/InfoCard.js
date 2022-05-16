// Libs
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const InfoCard = ({ type, index }) => {
  // Returns info card with heading and data
  let data;
  const weatherData = useSelector((state) => state.weather);

  // Get data
  if (type === "MinTemp") {
    data = `${weatherData.minTemp}°C`;
    type = "Min Temp";
  } else if (type === "MaxTemp") {
    data = `${weatherData.maxTemp}°C`;
    type = "Max Temp";
  } else if (type === "Humidity") data = `${weatherData.humidity}%`;
  else {
    data = `${weatherData.feelsLike}°C`;
    type = "Feels Like";
  }

  const variants = {
    initial: {
      scale: 0,
      y: -30,
      opacity: 0,
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * index,
      },
    },
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };
  const keyObj = new Date();
  return (
    <div className="info-card">
      <h2 className="info-card-heading">{type}</h2>
      <motion.div
        className="info-card-data"
        key={keyObj.getUTCMilliseconds()}
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        {data}
      </motion.div>
    </div>
  );
};

export default InfoCard;
