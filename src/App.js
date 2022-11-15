import './App.css';
import Weather from "./Weather";
import { SpinnerDotted } from "spinners-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Howdy!
        </h1>
        <Weather city="Bristol"/>
        <SpinnerDotted color="#f4edc8"/>
      </header>
    </div>
  );
}

export default App;
