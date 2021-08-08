import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [forecastReady, setForecastReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setForecastReady(true);
  }

  if (forecastReady) {
    return (
      <div className="row Forecast">
        <div className="col" id="forecast">
          <ForecastDay data={forecastData[0]} />
        </div>
      </div>
    );
  } else {
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=160bba92ebce94c5acec84fa85c7fec9&units=metric`;

    axios.get(forecastApiUrl).then(displayForecast);
    return null;
  }
}
