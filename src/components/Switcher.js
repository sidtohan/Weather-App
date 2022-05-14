// Libraries
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { updateDay } from "../reducers/dayReducer";
import { updateWeather } from "../reducers/weatherReducer";

const SwitcherElement = ({ data, onClick, refHook, day, i }) => {
  if (i == day) {
    return (
      <div
        className="switcher-element current"
        onClickCapture={onClick}
        ref={refHook}
      >
        {data.date}
      </div>
    );
  }
  return (
    <div className="switcher-element" onClickCapture={onClick}>
      {data.date}
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

    // Dispatch actions
    dispatch(updateDay(i));
    dispatch(updateWeather(dailyData));
  };

  return (
    <div className="switcher">
      {daily.map((data, i) => (
        <SwitcherElement
          data={data}
          key={i}
          day={day}
          i={i}
          onClick={(e) => handleDayChange(e, i)}
          refHook={currentRef}
        />
      ))}
    </div>
  );
};

export default Switcher;
