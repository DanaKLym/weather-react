import React from "react";
import CurrentDate from "./CurrentDate";
import CloudyDay from "./pics/CloudyDay.png"

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
    <span id="description">{props.data.description}</span>
  </p>
  <div className="row">
  <div className="col">
    <h2 className="degrees">
      <img
        src={CloudyDay}
        alt={props.data.description}
        className="mainImage"
        id="mainImageElement"
      />
      <br />
      <div className="mainTemperature">
    <span className="mainDegrees">{Math.round(props.data.temperature)}</span>
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
