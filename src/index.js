// Libs
import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// SASS
import "./styles/main.scss";

// Components + Functions
import App from "./App";
import weatherReducer from "./reducers/weatherReducer";
import cityReducer from "./reducers/cityReducer";
import dailyReducer from "./reducers/dailyReducer";
import dayReducer from "./reducers/dayReducer";
import loadingReducer from "./reducers/loaderReducer";
import errorReducer from "./reducers/errorReducer";

const store = createStore(
  combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    day: dayReducer,
    daily: dailyReducer,
    loading: loadingReducer,
    error: errorReducer,
  })
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
