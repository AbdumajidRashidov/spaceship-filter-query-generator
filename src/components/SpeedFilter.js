import React, { useState } from "react";

const SpeedFilter = ({ onChange }) => {
  const [speed, setSpeed] = useState(0);
  const [mode, setMode] = useState("less");

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const updateFilter = () => {
    onChange({ speed, mode });
  };

  return (
    <div>
      <h3>Maximum Speed</h3>
      <div>
        <input type="number" value={speed} onChange={handleSpeedChange} />
        <select value={mode} onChange={handleModeChange}>
          <option value="less">Less than</option>
          <option value="more">More than</option>
          <option value="exactly">Exactly</option>
        </select>
      </div>
      <button onClick={updateFilter}>Apply</button>
    </div>
  );
};

export default SpeedFilter;
