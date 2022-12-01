import React from "react";
import CloudyDay from "./pics/CloudyDay.png"
import Footer from "./Footer";

export default function Weather() {
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
      <h1 className="mainCity">Kyiv</h1>
    <section className="mainWeather">
    <p>
      <span className="dateTime">
        Thursday, December 01, 2022,{" "}
        13:39
      </span>{" "}
      <br />
      <span id="description">Few clouds</span>
    </p>
    <div className="row">
    <div className="col">
      <h2 className="degrees">
        <img
          src={CloudyDay}
          alt="weather icon"
          className="mainImage"
          id="mainImageElement"
        />
        <br />
        <div className="mainTemperature">
      <span className="mainDegrees">14</span>
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
        Humidity: <span id="humidity">59</span>%
      </span>
      <br />
      <span className="wind">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/038/872/original/wind.png?1656363294"
          alt="wind-icon"
          width="20px"
        />{" "}
        Wind:
        <span id="wind"> 0</span>
        <span id="wind-conversion"> m/s</span>
      </span>
    </div>
    </div>
  </section>
  <hr />
  <section className="lowerWeather" id="forecast"></section>
  <hr />
  <Footer/>
  </div>;
}