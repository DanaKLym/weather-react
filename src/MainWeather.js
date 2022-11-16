import React from "react";
import "./MainWeather.css";
import Col1 from "./Col1";
import Col2 from "./Col2";

export default function MainWeather(props) {
  return (
    <section className="mainWeather">
      <p>
        <span className="dateTime">
          {props.weekDay}, {props.month} {props.date}, {props.year},{" "}
          {props.time}
        </span>{" "}
        <br />
        <span id="description">{props.description}</span>
      </p>
      <div className="row">
        <Col1 />
        <Col2 humidity="59" wind="0" />
      </div>
    </section>
  );
}
