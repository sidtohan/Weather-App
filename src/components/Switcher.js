// Libraries
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InView } from "react-intersection-observer";

// Reducers
import { updateDay } from "../reducers/dayReducer";
import { updateWeather } from "../reducers/weatherReducer";

const SwitcherElement = ({ data, i, day, handleDayChange, switcherRef }) => {
  if (i == day) {
    return (
      <InView onChange={() => handleDayChange(i)} threshold={0.75}>
        {({ inView, ref }) => (
          <div className="switcher-element current" ref={ref}>
            {data.date}
          </div>
        )}
      </InView>
    );
  }
  return (
    <InView onChange={() => handleDayChange(i)} threshold={0.9}>
      {({ inView, ref }) => (
        <div className="switcher-element" ref={ref}>
          {data.date}
        </div>
      )}
    </InView>
  );
};

const Switcher = () => {
  // Responsible for switching the current day
  const day = useSelector((state) => state.day);
  const daily = useSelector((state) => state.daily);
  const dispatch = useDispatch();

  // Add logic for changing day
  const handleDayChange = (i) => {
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
          i={i}
          day={day}
          handleDayChange={handleDayChange}
        />
      ))}
    </div>
  );
};

export default Switcher;
