import React, { useState } from "react";

const DateFilter = ({ onChange }) => {
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("after");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const updateFilter = () => {
    onChange({ date, mode });
  };

  return (
    <div>
      <h3>Date of Manufacture</h3>
      <div>
        <input type="date" value={date} onChange={handleDateChange} />
        <select value={mode} onChange={handleModeChange}>
          <option value="after">After</option>
          <option value="before">Before</option>
          <option value="exact">On the exact date</option>
        </select>
      </div>
      <button onClick={updateFilter}>Apply</button>
    </div>
  );
};

export default DateFilter;
