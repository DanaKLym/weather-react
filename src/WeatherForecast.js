import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        
    }

    let apiKey = "b91708t4bbb93aa86b666d50a5of7abe";
    let forecastCity = props.city;
    let unit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
    return (
    <div className="weatherForecast">
        <div className="row">
            <div className="col">
                <div className="forecast-day">Fri</div>
                <WeatherIcon code="snow-night" description="snow" size={100} />
                <div className="forecast-temperature"> <span className="forecast-temperature-max">19°</span> <span className="forecast-temperature-min">10°</span> </div>
            </div>
        </div>
    </div>)
}