import React from "react";
import "./WeatherHumidityWind.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherHumidityWind(props) {
    return <div className="col-md-6 text-center text-md-start humidityAndWind">
    <span className="humidity">
        <div className="d-inline-block">
          <WeatherIcon code="humidity" description="humidity-icon" size="30"/>
        </div>
        Humidity: <span id="humidity">{props.humidity}</span>%
      </span>
      <br />
      <span className="wind">
      <div className="d-inline-block">
          <WeatherIcon code="wind" description="humidity-icon" size="30"/>
        </div>
        Wind:
        <span id="wind"> {Math.round(props.windspeed)}</span>
        <span id="wind-conversion"> {props.windspeedUnits}</span>
      </span>
    </div>
}