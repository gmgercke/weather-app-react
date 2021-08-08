import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props) {
  function maxTemp() {
    const maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    const minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function formatForecastDay() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{formatForecastDay()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={32} />
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()} </span>
        <span className="forecast-temp-min">| {minTemp()}</span>
      </div>
    </div>
  );
}
