import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [forecastReady, setForecastReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(
    function () {
      setForecastReady(false);
    },
    [props.coordinates]
  );

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setForecastReady(true);
  }

  function forecastLoader() {
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=5db7555ef9aa7017e515b969f4711fd7&units=metric`;

    axios.get(forecastApiUrl).then(displayForecast);
  }

  if (forecastReady) {
    return (
      <div className="row Forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col" id="forecast" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    forecastLoader();
    return null;
  }
}
