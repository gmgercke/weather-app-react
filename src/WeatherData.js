import React from "react";
import DateTime from "./DateTime";
import WeatherIcons from "./WeatherIcons";
// import Temperature from "./Temperature";
// Will leave this in here for later use
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
        <div className="col-2 d-flex align-items-center">
          <WeatherIcons code={props.data.icon} size={62} />
        </div>
        <div className="col temperature">
          <span className="Temperature">{props.data.temp}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 Attributes">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity} %
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind} km/h
            </li>
            <li>
              <strong>Air Pressure:</strong> {props.data.pressure} hPa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
