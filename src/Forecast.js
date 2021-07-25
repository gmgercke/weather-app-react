import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  function formatForecastDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function displayForecast(response) {
    let forecastDays = response.data.daily;
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = `<div class="row">`;
    forecastDays.forEach(function (day, index) {
      if (index > 0 && index < 6) {
        forecastHTML =
          forecastHTML +
          `       <div class="col forecast-unit" id="forecast">
            <div class="forecast-day">${formatForecastDay(day.dt)}</div>
            <img src="http://openweathermap.org/img/wn/${
              day.weather[0].icon
            }.png" alt="weather" id="icon" />
            <div class="forecast-temps">
            <span class="forecast-max-temp">${Math.round(
              day.temp.max
            )}° | </span>
            <span class="forecast-min-temp">${Math.round(day.temp.min)}°</span>
            </div>
          </div>`;
      }
    });

    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  }

  function getForecast(coordinates) {
    let apiKey = "38056c1bbe50ac4df0a26ff8642db7e0";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(displayForecast);
  }
  getForecast();
  return (
    <div className="Forecast">
      <hr />
      <div className="row">
        <div className="col" id="forecast">
          Forecast
        </div>
      </div>
    </div>
  );
}
