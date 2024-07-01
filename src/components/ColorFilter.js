import React, { useState } from "react";

const ColorFilter = ({ onChange }) => {
  const [colors, setColors] = useState([]);
  const [mode, setMode] = useState("any");

  const handleColorChange = (color) => {
    setColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const updateFilter = () => {
    onChange({ colors, mode });
  };

  return (
    <div>
      <h3>Colors</h3>
      <div>
        <label>
          <input type="checkbox" onChange={() => handleColorChange("red")} />{" "}
          Red
        </label>
        <label>
          <input type="checkbox" onChange={() => handleColorChange("blue")} />{" "}
          Blue
        </label>
        <label>
          <input type="checkbox" onChange={() => handleColorChange("green")} />{" "}
          Green
        </label>
        <label>
          <input type="checkbox" onChange={() => handleColorChange("yellow")} />{" "}
          Yellow
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={mode === "all"}
            onChange={handleModeChange}
          />{" "}
          All
        </label>
        <label>
          <input
            type="radio"
            value="any"
            checked={mode === "any"}
            onChange={handleModeChange}
          />{" "}
          Any
        </label>
        <label>
          <input
            type="radio"
            value="none"
            checked={mode === "none"}
            onChange={handleModeChange}
          />{" "}
          None
        </label>
      </div>
      <button onClick={updateFilter}>Apply</button>
    </div>
  );
};

export default ColorFilter;
