import React, { useState } from 'react';

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
    <div>
      <div className="big-c flex">
        <div>C</div>
        <div>
          <div className="little-letters">offee</div>
          <div className="little-letters">alculations</div>
        </div>
      </div>
      <div className="little-letters flex column">
        <span className="flex">
          <label htmlFor="ratio">Ratio: {ratio}</label>
          <input
            className="little-letters"
            style={{ width: '65px', marginLeft: '5px', paddingLeft: '10px' }}
            type="range"
            name="ratio"
            id=""
            min="10"
            max="20"
            onChange={handleRatio}
            value={ratio}
          />
        </span>
        <div style={{ fontSize: '12px', marginLeft: '5px' }}>
          {' '}
          (lower number is stronger)
        </div>
        <div style={{ marginTop: '2rem' }}>Water: {water}</div>
      </div>
      <div className="flex column little-letters">
        <input
          style={{ width: '200px', marginLeft: '5px', paddingLeft: '10px' }}
          step={10}
          type="range"
          name=""
          onChange={handleChange}
          value={water}
          min="250"
          max="1250"
        />
        <div>Beans: {Math.round(beans)}</div>
      </div>{' '}
    </div>
  );
}

export default App;
