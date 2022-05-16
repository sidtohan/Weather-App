// Libraries
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InView } from "react-intersection-observer";

// Reducers
import { updateDay } from "../reducers/dayReducer";
import { updateWeather } from "../reducers/weatherReducer";

const SwitcherElement = ({ data, i, day, handleDayChange, switcherRef }) => {
  if (i === day) {
    return (
      <InView
        onChange={() => handleDayChange(i)}
        threshold={0.6}
        root={switcherRef.current}
      >
        {({ inView, ref }) => (
          <div className="switcher-element current" ref={ref}>
            {data.date}
          </div>
        )}
      </InView>
    );
  }
  return (
    <InView
      onChange={() => handleDayChange(i)}
      threshold={0.6}
      root={switcherRef.current}
    >
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

  // Switcher Ref
  const switcherRef = useRef(null);

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

  useEffect(() => {
    document.body.onkeydown = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      e.preventDefault();
      const children = switcherRef.current.children;
      if (e.key === "ArrowLeft") {
        const target = day - 1;
        if (target < 0) return;
        // Update Day
        // Scroll to it
        switcherRef.current.scrollBy({
          left: -children[day].clientWidth,
          behaviour: "smooth",
        });
      } else if (e.key === "ArrowRight") {
        const target = day + 1;
        if (target >= 7) return;
        // Update Day
        // Scroll to it
        switcherRef.current.scrollBy({
          left: children[day].clientWidth,
          behaviour: "smotth",
        });
      }
    };
  }, [day, daily]);

  useEffect(() => {
    dispatch(updateDay(0));
  }, [daily, dispatch]);
  return (
    <div className="switcher" ref={switcherRef}>
      {daily.map((data, i) => (
        <SwitcherElement
          data={data}
          key={i}
          i={i}
          day={day}
          handleDayChange={handleDayChange}
          switcherRef={switcherRef}
        />
      ))}
    </div>
  );
};

export default Switcher;
