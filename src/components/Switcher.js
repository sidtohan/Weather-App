import { useDispatch, useSelector } from "react-redux";
import { updateDay } from "../reducers/dayReducer";
import { updateWeather } from "../reducers/weatherReducer";
import { dayMapper } from "../utils/dataMapper";
import { getLeftRightArrow } from "../utils/iconMapper";

const Switcher = () => {
  // Responsible for switching the current day
  const day = useSelector((state) => state.day);
  const daily = useSelector((state) => state.daily);
  const dispatch = useDispatch();
  const { left, right } = getLeftRightArrow();

  // Convert day to word form
  const dayName = dayMapper(day);

  const handleDayChange = (day) => {
    if (day < 0) day = 6;
    else day = day % 7;

    // update data now
    const dailyData = daily[day];
    const condition = dailyData.condition;

    // update main display
    const mainDisplay = document.getElementById("main-display");
    mainDisplay.className = condition.toLowerCase();

    // Dispatch actions
    dispatch(updateDay(day));
    dispatch(updateWeather(dailyData));
  };
  return (
    <div className="main-card-switcher">
      <button
        className="left-switch"
        type="button"
        onClick={() => handleDayChange(day - 1)}
      >
        {left}
      </button>
      <div className="day-name">{dayName}</div>
      <button
        className="right-switch"
        type="button"
        onClick={() => handleDayChange(day + 1)}
      >
        {right}
      </button>
    </div>
  );
};

export default Switcher;
