import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {

    let minTemperature = props.data.temperature.minimum;
        let maxTemperature = props.data.temperature.maximum;
        let forecastIcon = props.data.condition.icon;
        

        function forecastDay() {
            let date = new Date(props.data.time * 1000);
            let day = date.getDay();

            let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

            return days[day];
        }

    return <div className="forecast-day-card p-1">
        <div className="forecast-day">{forecastDay()}</div>
                    <WeatherIcon code={forecastIcon} description={props.forecastDescription} size={80} />
                    <div className="forecast-temperature"> <span className="forecast-temperature-max">{Math.round(maxTemperature)}°</span>/<span className="forecast-temperature-min">{Math.round(minTemperature)}°</span> </div>
    </div>;
}