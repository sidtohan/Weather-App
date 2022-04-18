// Libs and Components
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainCard from "./components/MainCard";
import InfoHolder from "./components/InfoHolder";
import Error from "./components/Error";
import Search from "./components/Search";

// Api
import getData from "./services/apiService";
import updateState from "./utils/stateUpdater";
import Loader from "./components/Loader";
import { loaderOff } from "./reducers/loaderReducer";
import Switcher from "./components/Switcher";

const App = () => {
  const dispatch = useDispatch();
  // Passing dispatch as parameter
  useEffect(() => {
    async function firstCall() {
      const { name, ...data } = await getData("Delhi");
      updateState(name, data, dispatch);
      dispatch(loaderOff());
    }
    firstCall();
  }, [dispatch]);
  return (
    <div id="main-display" className="clear">
      <MainCard />
      <InfoHolder />
      <Loader />
      <Error />
      <Switcher />
      <Search />
    </div>
  );
};
export default App;
