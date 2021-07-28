import React, { useState } from "react";
import DateTime from "./DateTime";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ active: false });

  function showWeather(response) {
    setWeather({
      active: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=38056c1bbe50ac4df0a26ff8642db7e0`;
    axios.get(apiUrl).then(showWeather);
  }

  function submitCity(event) {
    setCity(event.target.value);
  }

  function locationSearch(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=38056c1bbe50ac4df0a26ff8642db7e0&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(locationSearch);
  }

  if (weather.active) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="search-field"
            autoFocus="on"
            type="search"
            placeholder="Search for a city..."
            onChange={submitCity}
          />
          <input className="search-button" type="submit" value="Search" />
          <button className="current-loc" onClick={getLocation}>
            Current Location
          </button>
        </form>
        <div className="Weather">
          <h1>
            <strong>{weather.city}</strong>
          </h1>
          <DateTime />
          <p className="description">{weather.description}</p>
          <div className="row">
            <div className="col-3">
              <img src={weather.icon} alt={weather.description} id="icon" />
            </div>
            <div className="col temperature">
              {weather.temp} <span className="unit">°C</span>
            </div>
            <div className="col-6 Attributes" my-auto="true">
              <ul>
                <li>Humidity: {weather.humidity} %</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=38056c1bbe50ac4df0a26ff8642db7e0`;
    axios.get(apiUrl).then(showWeather);
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="search-field"
            autoFocus="on"
            type="search"
            placeholder="Search for a city..."
            onChange={submitCity}
          />
          <input className="search-button" type="submit" value="Search" />
          <button className="current-loc" onClick={getLocation}>
            Current Location
          </button>
        </form>
      </div>
    );
  }
}
