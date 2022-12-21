import React, { useState } from "react";
import axios from "axios";
import { Dna } from 'react-loader-spinner'
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {

  const [weather, setWeather] = useState ({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeather({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "b91708t4bbb93aa86b666d50a5of7abe";
    let units = "metric";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for city;
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    //update city;
  }

  function searchCurrentLocation(location) {
    
    let apiKey = "b91708t4bbb93aa86b666d50a5of7abe";
    let units = "metric";
    let currentLocationApiUrl = `https://api.shecodes.io/weather/v1/current?lon=${location.coords.longitude}&lat=${location.coords.latitude}&key=${apiKey}&units=${units}`;


    axios.get(currentLocationApiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }


  if (weather.ready) {
    return  <div className="Weather">
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        autoFocus
        autoComplete="off"
        className="search-input"
        id="city-search"
        onChange={handleCityChange}
      />
      <input type="submit" value="Go!" className="upperBtn" />
      <button className="upperBtn" id="location-button" onClick={getCurrentLocation}>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/048/106/original/home.png?1665489684"
          alt="current location"
          width="15px"
        />
      </button>
    </form>
    <WeatherInfo data={weather} forecastCity={weather.city} forecastDescription={weather.description}/>
</div>;
  } else {    
    search();
    return <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
  }
  

   
}