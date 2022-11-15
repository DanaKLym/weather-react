import React from "react";
import axios from 'axios';

export default function Weather(props) {
    let apiKey = "39211d1d13139f85371fa9af1af3fc63";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    function handleResponse (response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}`)
    }

    axios.get(apiUrl).then(handleResponse);
    return <p>Hello from {props.city}!</p>
}