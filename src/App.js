// App.js

import React, { useState } from "react";
import ColorFilter from "./components/ColorFilter";
import SpeedFilter from "./components/SpeedFilter";
import DateFilter from "./components/DateFilter";
import PulseLaserFilter from "./components/PulseLaserFilter";
import "./assets/styles/App.css";

const App = () => {
  const [filters, setFilters] = useState({
    colors: [],
    colorMode: "any",
    speed: 0,
    speedMode: "less",
    date: "",
    dateMode: "after",
    hasPulseLaser: true,
  });

  const handleFilterChange = (filterType) => (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filter,
    }));
  };

  const generateQueryString = () => {
    const {
      colors,
      colorMode,
      speed,
      speedMode,
      date,
      dateMode,
      hasPulseLaser,
    } = filters;
    const queryString = [];

    if (colors.length > 0) {
      queryString.push(`colors=${colors.join(",")}`);
      queryString.push(`colorMode=${colorMode}`);
    }
    queryString.push(`speed=${speed}`);
    queryString.push(`speedMode=${speedMode}`);
    if (date) {
      queryString.push(`date=${date}`);
      queryString.push(`dateMode=${dateMode}`);
    }
    queryString.push(`hasPulseLaser=${hasPulseLaser}`);

    return queryString.join("&");
  };

  return (
    <div className="container">
      <h1>Spaceship Filter</h1>
      <div className="filters">
        <div className="filter-card">
          <ColorFilter onChange={handleFilterChange("colors")} />
        </div>
        <div className="filter-card">
          <SpeedFilter onChange={handleFilterChange("speed")} />
        </div>
        <div className="filter-card">
          <DateFilter onChange={handleFilterChange("date")} />
        </div>
        <div className="filter-card">
          <PulseLaserFilter onChange={handleFilterChange("hasPulseLaser")} />
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() =>
            alert("Query String generated:\n" + generateQueryString())
          }
        >
          Generate Query String
        </button>
      </div>
      <div className="generated-query">
        <h2>Generated Query String</h2>
        <p>{generateQueryString()}</p>
      </div>
    </div>
  );
};

export default App;
