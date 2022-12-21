import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import MainTemperature from "./MainTemperature";

export default function WeatherInfo(props) {
    return <div className="WeatherInfo">
        <h1 className="mainCity">{props.data.city}</h1>
    <h4>{props.data.country}</h4>
  <p className="WeatherDescription">
    <span className="dateTime">
      <CurrentDate date={props.data.date}/>
    </span>{" "}
    <br />
    <span id="description" className="d-block">{props.data.description}</span>
  </p>
  <WeatherIcon code={props.data.icon} description={props.data.description} size={200}/>
    <MainTemperature celsius={props.data.temperature} humidity={props.data.humidity} wind={props.data.wind} forecastCity={props.forecastCity} forecastDescription={props.forecastDescription}/>
    </div>;
}
