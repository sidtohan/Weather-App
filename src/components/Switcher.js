import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDay } from "../reducers/dayReducer";
import { updateWeather } from "../reducers/weatherReducer";
import iconMapper from "../utils/iconMapper";

const SwitcherCard = ({ data, onClick, refHook }) => {
  if (data.date == "Today") {
    return (
      <div
        className="switcher-card current"
        onClickCapture={onClick}
        ref={refHook}
      >
        <h2 className="switcher-card-heading">{data.date}</h2>
        {iconMapper(data.condition)}
        <div className="switcher-card-temp">{data.temp}°C</div>
      </div>
    );
  }
  return (
    <div className="switcher-card" onClickCapture={onClick}>
      <h2 className="switcher-card-heading">{data.date}</h2>
      {iconMapper(data.condition)}
      <div className="switcher-card-temp">{data.temp}°C</div>
    </div>
  );
};
const Switcher = () => {
  // Responsible for switching the current day
  const day = useSelector((state) => state.day);
  const daily = useSelector((state) => state.daily);
  const dispatch = useDispatch();

  const currentRef = useRef(null);
  // Add logic for changing day
  const handleDayChange = (e, i) => {
    if (e.target === currentRef.current) {
      return;
    }
    // update data now
    const dailyData = daily[i];
    const condition = dailyData.condition;

    // update main display
    const mainDisplay = document.getElementById("main-display");
    mainDisplay.className = condition.toLowerCase();

    // switch current
    currentRef.current.classList.remove("current");
    currentRef.current = e.target;
    e.target.classList.add("current");

    // Dispatch actions
    dispatch(updateDay(day));
    dispatch(updateWeather(dailyData));
  };

  // Add arrow navigation
  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === "ArrowLeft") handleDayChange(day - 1);
      else if (e.key === "ArrowRight") handleDayChange(day + 1);
      e.stopPropagation();
    };
  }, [day, daily]);

  return (
    <div className="switcher">
      {daily.map((data, i) => (
        <SwitcherCard
          data={data}
          key={i}
          onClick={(e) => handleDayChange(e, i)}
          refHook={currentRef}
        />
      ))}
    </div>
  );
};

export default Switcher;
