import React from "react";
import "./MainTemperature.css";

export default function MainTemperature(props) {
  return (
    <div className="mainTemperature">
      <span className="mainDegrees">{props.degrees} </span>
      <span className="temType">
        <a href="/" id="celcius" className="active">
          °C
        </a>{" "}
        |
        <a href="/" id="fahrenheit" className="to-be-chosen">
          °F
        </a>
      </span>
    </div>
  );
}
