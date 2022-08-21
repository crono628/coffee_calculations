import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function App() {
  const [water, setWater] = useState(250);
  const [ratio, setRatio] = useState(14);
  const [beans, setBeans] = useState(water / ratio);
  const handleChange = (e) => {
    setBeans(e.target.value / ratio);
    setWater(e.target.value);
  };
  const handleRatio = (e) => {
    setRatio(e.target.value);
    setBeans(water / e.target.value);
  };
  return (
    <div className="app-container">
      <div className="big-c flex">
        <div>C</div>
        <div>
          <div className="small-letters">offee</div>
          <div className="small-letters">alculations</div>
        </div>
      </div>
      <div className="small-letters">
        <div>
          <label htmlFor="ratio">Ratio: {ratio}</label>
          <Slider
            value={ratio}
            onChange={handleRatio}
            step={1}
            marks
            min={10}
            max={20}
            size="large"
          />
        </div>
        <div style={{ fontSize: '12px', marginLeft: '5px' }}>
          (lower number is stronger)
        </div>
        <div className="relative" style={{ marginTop: '2rem' }}>
          <span className="absolute width-100">Water: {water} ml</span>
        </div>
      </div>
      <div className="small-letters margin-top-30 width-80">
        <Slider
          value={water}
          onChange={handleChange}
          step={25}
          marks
          min={250}
          max={1250}
          size="large"
        />
      </div>
      <div className="relative" style={{ fontSize: '1.5rem' }}>
        <span className=" width-100">Beans: {Math.round(beans)} grams</span>
      </div>
    </div>
  );
}

export default App;
