// Libs and Components
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainCard from "./components/MainCard";
import InfoCard from "./components/InfoCard";

// Api
import getData from "./services/apiService";
import updateState from "./utils/stateUpdater";

const App = () => {
  const dispatch = useDispatch();
  // Passing dispatch as parameter
  useEffect(() => {
    async function firstCall() {
      const { name, ...data } = await getData("Delhi");
      updateState(name, data, dispatch);
    }
    firstCall();
  }, []);
  return (
    <div>
      <MainCard />
      <InfoCard type="MinTemp" />
      <InfoCard type="MaxTemp" />
      <InfoCard type="Humidity" />
      <InfoCard type="Wind" />
    </div>
  );
};
export default App;
