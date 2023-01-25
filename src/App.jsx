import "./App.css";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <p className="advice">ADVICE #117</p>
        <p className="text">
          "Its is easy to sit up and take notice, what's difficult is getting up
          and taking actions"
        </p>
        <img src={divider} className="divider" alt="divider" />
        <img src={dice} className="dice" />
      </div>
    </div>
  );
}

export default App;
