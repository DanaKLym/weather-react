import axios from "axios";
import React, {useState, useEffect} from "react";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect (() => {
        setLoaded(false);
    }, [props.city]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="weatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                        return (<div className="col" key={index}>
                    <ForecastDay data={dailyForecast}/>
                </div>);
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>) } 
        else {
            let apiKey = "b91708t4bbb93aa86b666d50a5of7abe";
            let unit = "metric";
            let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${unit}`;

            axios.get(apiUrl).then(handleResponse);

        return null;
        }
    
}