import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChage(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(2);
  }, [weight, height]);
  return (
    <>
      <main>
        <h1>BMI Calculator</h1>
        <div className="input-selection">
          <p className="slider-output">Weight: {weight} KG</p>
          <input
            className="input-slider"
            type="range"
            step="1"
            min="40"
            max="200"
            onChange={onWeightChange}
          />
          <p className="slider-output">Height: {height} CM</p>
          <input
            className="input-slider"
            type="range"
            onChange={onHeightChage}
            min="140"
            max="220"
          />
          <div className="output-section">
            <p>Your BMI is</p>
            <p className="output">{output}</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <a href="/">Designed by @Yashraj Mundada</a>
      </footer>
    </>
  );
}

export default App;
