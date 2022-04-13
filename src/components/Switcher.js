import { useDispatch, useSelector } from "react-redux";
import { updateDay } from "../reducers/dayReducer";
import { updateWeather } from "../reducers/weatherReducer";

const Switcher = () => {
  // Responsible for switching the current day
  const day = useSelector((state) => state.day);
  const daily = useSelector((state) => state.daily);
  const dispatch = useDispatch();
  const handleDayChange = (day) => {
    if (day < 0) day = 6;
    else day = day % 7;

    // update data now
    const dailyData = daily[day];
    dispatch(updateDay(day));
    dispatch(updateWeather(dailyData));
  };
  return (
    <div>
      <button type="button" onClick={() => handleDayChange(day - 1)}>
        left
      </button>
      <div className="current-day">{day}</div>
      <button type="button" onClick={() => handleDayChange(day + 1)}>
        right
      </button>
    </div>
  );
};

export default Switcher;
