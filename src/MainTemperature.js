import React, { useState } from "react";
import "./MainTemperature.css";
import WeatherHumidityWind from "./WeatherHumidityWind";
import WeatherForecast from "./WeatherForecast";

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
        return <div>
        <div className="row">
           <div className="col mainTemperature">
        <span className="mainDegrees">{Math.round(props.celsius)}</span>
        <span className="temType"> °C |
          <a href="/" className="to-be-chosen" onClick={converttoFahrenheit}>
            °F
          </a>
        </span>
      </div>
      <WeatherHumidityWind humidity={props.humidity} windspeed={props.wind} windspeedUnits="m/s"/>
      </div>
      <hr />
      <section className="lowerWeather">
  <WeatherForecast forecastCity={props.forecastCity} forecastDescription={props.forecastDescription} forecastUnits="metric"/>
</section>
<hr />
      </div>
    } else {
        let fahrenheit = props.celsius * (9/5) + 32;
        let windSpeedImperial = props.wind * 2.23694;

        return <div>
          <div className="row">
          <div className="col mainTemperature">
        <span className="mainDegrees">{Math.round(fahrenheit)}</span>
        <span className="temType">
          <a href="/" className="to-be-chosen" onClick={converttoCelsius}> °C
          </a>{" "}
          | °F
        </span>
      </div>
      <WeatherHumidityWind humidity={props.humidity} windspeed={windSpeedImperial} windspeedUnits="mph"/>
      </div>
      <hr />
      <section className="lowerWeather">
  <WeatherForecast forecastCity={props.forecastCity} forecastDescription={props.forecastDescription} forecastUnits="imperial"/>
</section>
<hr />
      </div>;
    }


   
}