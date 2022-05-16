// Libs
import { useSelector } from "react-redux";
import iconMapper from "../utils/iconMapper";
import { dayMapper } from "../utils/dataMapper";
import { AnimatePresence, motion } from "framer-motion";

const MainCard = () => {
  // Main Card component
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  const day = useSelector((state) => state.day);
  const displayDay = dayMapper(day);

  const keyObj = new Date();
  const variants = {
    initial: {
      rotateZ: 180,
      scale: 0,
    },
    animate: {
      rotateZ: 0,
      scale: 1,
    },
    exit: {
      rotateZ: 180,
      scale: 0,
    },
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };
  return (
    <>
      <h2 className="city-name">{city.toUpperCase()}</h2>
      <div className="main-card">
        <h2 className="main-card-day">{displayDay}</h2>
        <div className="main-card-temperature">
          {weather.temp}
          <sup>°C</sup>
        </div>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="main-card-weather-icon"
            key={`${weather.condition}${keyObj.getMilliseconds()}`}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
          >
            {iconMapper(weather.condition)}
          </motion.div>
        </AnimatePresence>
        <div className="main-card-condition">{weather.condition}</div>
      </div>
    </>
  );
};

export default MainCard;
