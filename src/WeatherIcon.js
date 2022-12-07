import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import CloudyDay from "./pics/CloudyDay.png"

export default function WeatherIcon (props) {
    const codeMapping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
        "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day": "CLOUDY_DAY",
        "broken-clouds-night": "CLOUDY_NIGHT",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "RAIN",
        "thunderstorm-night": "RAIN",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG"
      };
    return (
        <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#683AF7"
    size={100}
    animate={true}
  />
        );
}