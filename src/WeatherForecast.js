import axios from "axios";
import React, {useState} from "react";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        
        return (
            <div className="weatherForecast">
            <div className="row">
                <div className="col">
                    <ForecastDay data={forecast[0]}/>
                </div>
            </div>
        </div>) } 
        else {
            let apiKey = "b91708t4bbb93aa86b666d50a5of7abe";
            let forecastCity = props.city;
            let unit = "metric";
            let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${apiKey}&units=${unit}`;

            axios.get(apiUrl).then(handleResponse);

        return null;
        }
    
}