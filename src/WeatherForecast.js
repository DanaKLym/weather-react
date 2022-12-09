import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
    <div className="weatherForecast">
        <div className="row">
            <div className="col">
                <div className="forecast-day">Fri</div>
                <WeatherIcon code="snow-day" size={36} />
                <div className="forecast-temperature"> <span className="forecast-temperature-max">19°</span> <span className="forecast-temperature-min">10°</span> </div>
            </div>
        </div>
    </div>)
}