import React from "react";
import "./Col2.css";

export default function Col2(props) {
  return (
    <div className="col">
      <br />
      <span className="humidity">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/871/original/humidity.png?1656363285"
          alt="humidity-icon"
          width="20px"
        />{" "}
        Humidity: <span id="humidity">{props.humidity}</span>%
      </span>
      <br />
      <span className="wind">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/872/original/wind.png?1656363294"
          alt="wind-icon"
          width="20px"
        />{" "}
        Wind:
        <span id="wind"> {props.wind}</span>
        <span id="wind-conversion"> m/s</span>
      </span>
    </div>
  );
}
