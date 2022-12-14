import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider'

function App() {
  const [water, setWater] = useState(250)
  const [ratio, setRatio] = useState(14)
  const handleWater = (e) => {
    const newWater = e.target.value
    setWater(newWater)
    // const newBeans = newWater / ratio
    // setBeans(newBeans)
  }
  const handleRatio = (e) => {
    const newRatio = e.target.value
    setRatio(newRatio)
  }

  return (
    <div className="app-container">
      <div className="big-c flex">
        <div>
          <div className="big-c title">Coffee</div>
          <div className="big-c title">Calculations</div>
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
          (lower ratio produces stronger coffee)
        </div>
        <div className="relative" style={{ marginTop: '2rem' }}>
          <span className="absolute width-100">Water: {water} ml</span>
        </div>
      </div>
      <div className="small-letters margin-top-30 width-80">
        {/* <Slider
          value={water}
          onChange={handleWater}
          step={25}
          min={250}
          max={1250}
          size="large"
        /> */}
        <input
          type="range"
          min="250"
          max="1250"
          className="slider"
          id="myRange"
          onChange={handleWater}
          list="tickmarks"
          step={25}
          value={water}
        />
        <datalist id="tickmarks">
          <option value="250" label="250 ml"></option>
          <option value="500" label="500 ml"></option>
          <option value="750" label="750 ml"></option>
          <option value="1000" label="1000 ml"></option>
          <option value="1250" label="1250 ml"></option>
        </datalist>
      </div>
      <div className="relative" style={{ fontSize: '1.5rem' }}>
        <span className=" width-100">
          Beans: {Math.round(water / ratio)} grams
        </span>
      </div>
    </div>
  )
}

export default App
