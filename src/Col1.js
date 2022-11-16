import React from "react";
import MainTemperature from "./MainTemperature";
import "./Col1.css";

export default function Col1() {
  return (
    <div className="col">
      <h2 className="degrees">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/876/original/sunny.png?1656363351"
          alt="weather icon"
          className="mainImage"
          id="mainImageElement"
        />
        <br />
        <MainTemperature degrees="14" />
      </h2>
    </div>
  );
}
