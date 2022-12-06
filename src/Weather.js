import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import CloudyDay from "./pics/CloudyDay.png"

export default function Weather() {

  const [weather, setWeather] = useState ({ready: false});

  function handleResponse(response){
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weather.ready) {
    return  <div className="Weather">
    <form className="search">
      <input
        type="text"
        placeholder="search"
        autoFocus
        autoComplete="off"
        className="search-input"
        id="city-search"
      />
      <input type="submit" value="Go!" className="upperBtn" />
      <button className="upperBtn" id="location-button">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/048/106/original/home.png?1665489684"
          alt="current location"
          width="15px"
        />
      </button>
    </form>
    <h1 className="mainCity">{weather.city}</h1>
    <h4>{weather.country}</h4>
  <section className="mainWeather">
  <p>
    <span className="dateTime">
      <CurrentDate date={weather.date}/>
    </span>{" "}
    <br />
    <span id="description">{weather.description}</span>
  </p>
  <div className="row">
  <div className="col">
    <h2 className="degrees">
      <img
        src={CloudyDay}
        alt={weather.description}
        className="mainImage"
        id="mainImageElement"
      />
      <br />
      <div className="mainTemperature">
    <span className="mainDegrees">{Math.round(weather.temperature)}</span>
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
      Humidity: <span id="humidity">{weather.humidity}</span>%
    </span>
    <br />
    <span className="wind">
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/872/original/wind.png?1656363294"
        alt="wind-icon"
        width="20px"
      />{" "}
      Wind:
      <span id="wind"> {Math.round(weather.wind)}</span>
      <span id="wind-conversion"> m/s</span>
    </span>
  </div>
  </div>
</section>
<hr />
<section className="lowerWeather" id="forecast"></section>
<hr />
</div>;
  } else {
    
    const apiKey = "b91708t4bbb93aa86b666d50a5of7abe";
    let city = "New York";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>
  }
  

   
}