import React, { useState } from "react";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ active: false });

  function showWeather(response) {
    setWeather({
      active: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
    });
  }

  function defaultSearch() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=38056c1bbe50ac4df0a26ff8642db7e0`;
    axios.get(apiUrl).then(showWeather);
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
        <WeatherData data={weather} />
        <Forecast />{" "}
      </div>
    );
  } else {
    defaultSearch();
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
