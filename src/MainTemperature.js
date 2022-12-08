import React, { useState } from "react";

export default function MainTemperature(props) {

    const [unit, setUnit] = useState('celsius');
   

    function converttoFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    function converttoCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    if (unit === "celsius") {
        return <div className="mainTemperature">
        <span className="mainDegrees">{Math.round(props.celsius)}</span>
        <span className="temType"> °C |
          <a href="/" className="to-be-chosen" onClick={converttoFahrenheit}>
            °F
          </a>
        </span>
      </div>
    } else {
        let fahrenheit = props.celsius * (9/5) + 32;

        return <div className="mainTemperature">
        <span className="mainDegrees">{Math.round(fahrenheit)}</span>
        <span className="temType">
          <a href="/" className="to-be-chosen" onClick={converttoCelsius}> °C
          </a>{" "}
          | °F
        </span>
      </div>;
    }


   
}