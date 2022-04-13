import React, { useState, useEffect } from "react";
import MainCard from "./components/MainCard";
import InfoCard from "./components/InfoCard";

const App = () => {
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
