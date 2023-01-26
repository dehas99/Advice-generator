import "./App.css";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdvice(data);
      });
  }, []);
  return (
    <div className="App">
      <div className="Card">
        <p className="advice">ADVICE #117</p>
        <p className="text">{advice?.slip?.advice}</p>
        <img src={divider} className="divider" alt="divider" />

        <div className="button">
          <img src={dice} className="dice" allt="dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
