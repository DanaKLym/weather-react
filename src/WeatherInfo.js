import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import MainTemperature from "./MainTemperature";

export default function WeatherInfo(props) {
    return <div className="WeatherInfo">
        <h1 className="mainCity">{props.data.city}</h1>
    <h4>{props.data.country}</h4>
  <section className="mainWeather">
  <p>
    <span className="dateTime">
      <CurrentDate date={props.data.date}/>
    </span>{" "}
    <br />
    <span id="description" className="d-block">{props.data.description}</span>
  </p>
  <div className="row">
  <div className="col">
    <h2 className="leftColumn">
      <WeatherIcon code={props.data.icon} size={100}/>
      <MainTemperature celsius={props.data.temperature}/>
    </h2>
  </div>
  <div className="col">
    <br />
    <span className="humidity">
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/871/original/humidity.png?1656363285"
        alt="humidity-icon"
        width="20px"
      />{" "}
      Humidity: <span id="humidity">{props.data.humidity}</span>%
    </span>
    <br />
    <span className="wind">
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/872/original/wind.png?1656363294"
        alt="wind-icon"
        width="20px"
      />{" "}
      Wind:
      <span id="wind"> {Math.round(props.data.wind)}</span>
      <span id="wind-conversion"> m/s</span>
    </span>
  </div>
  </div>
</section>
<hr />
    </div>;
}
