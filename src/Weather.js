import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
//import icon from "./icons/10d.svg";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <div className='container weather-container'>
          <div className='col right'>
            <div className='weather-details'>
              <div className='row'>
                <div className='col-10'>Humidity</div>
                <div className='col-2'>
                  <span id='humidity'>{weatherData.humidity}</span>%
                </div>
              </div>
              <div className='row'>
                <div className='col-10'>Windspeed</div>
                <div className='col-2'>
                  <span id='wind'>{Math.round(weatherData.wind)}</span>
                  <span id='wind-units'>km/h</span>
                </div>
              </div>
            </div>
            <hr />
            <div id='forecast'></div>
            <hr />
            <div className='city-change'>
              <form id='city-search' onSubmit={handleSubmit}>
                <div className='mb-3 change-city-input'>
                  <input
                    type='search'
                    className=' form-control input-box'
                    id='input-city-box'
                    placeholder='Enter a city'
                    onChange={handleCityChange}
                  />
                  <button type='submit' id='submit-city-button' value='Submit'>
                    Go
                  </button>
                </div>
              </form>
              <button id='current-city-button'>Current location</button>
            </div>
          </div>
          <div className='col left'>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
