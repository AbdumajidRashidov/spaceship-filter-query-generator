import React, { useState } from "react";

const PulseLaserFilter = ({ onChange }) => {
  const [hasPulseLaser, setHasPulseLaser] = useState(true);

  const handlePulseLaserChange = (e) => {
    setHasPulseLaser(e.target.value === "true");
  };

  const updateFilter = () => {
    onChange({ hasPulseLaser });
  };

  return (
    <div>
      <h3>Pulse Laser</h3>
      <div>
        <label>
          <input
            type="radio"
            value="true"
            checked={hasPulseLaser === true}
            onChange={handlePulseLaserChange}
          />{" "}
          Has Pulse Laser
        </label>
        <label>
          <input
            type="radio"
            value="false"
            checked={hasPulseLaser === false}
            onChange={handlePulseLaserChange}
          />{" "}
          Does not have Pulse Laser
        </label>
      </div>
      <button onClick={updateFilter}>Apply</button>
    </div>
  );
};

export default PulseLaserFilter;
