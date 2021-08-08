import React from "react";
import DateTime from "./DateTime";
import WeatherIcons from "./WeatherIcons";
import Temperature from "./Temperature";
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
          <Temperature celsius={props.data.temp} />
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
