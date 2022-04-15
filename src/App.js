// Libs and Components
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainCard from "./components/MainCard";
import InfoHolder from "./components/InfoHolder";

// Api
import getData from "./services/apiService";
import updateState from "./utils/stateUpdater";
import Loader from "./components/Loader";
import { toggleLoader } from "./reducers/loaderReducer";

const App = () => {
  const dispatch = useDispatch();
  // Passing dispatch as parameter
  useEffect(() => {
    async function firstCall() {
      dispatch(toggleLoader());
      const { name, ...data } = await getData("Delhi");
      updateState(name, data, dispatch);
      dispatch(toggleLoader());
    }
    firstCall();
  }, [dispatch]);
  return (
    <div id="main-display">
      <MainCard />
      <InfoHolder />
      <Loader />
    </div>
  );
};
export default App;
