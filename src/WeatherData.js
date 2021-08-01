import React from "react";
import DateTime from "./DateTime";
import WeatherIcons from "./WeatherIcons";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>
        <strong>{props.data.city}</strong>
      </h1>
      <DateTime />
      <p className="description">{props.data.description}</p>
      <div className="row">
        <div className="col-2">
          <WeatherIcons code={props.data.icon} />
        </div>
        <div className="col temperature">
          {props.data.temp}
          <span className="unit">°C</span>
        </div>
        <div className="col-6 Attributes">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Air Pressure: {props.data.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
