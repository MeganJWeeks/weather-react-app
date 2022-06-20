import React from "react";
import "./Weather.css";
import icon from "./icons/10d.svg";

export default function Weather() {
  let weatherData = {
    day: "Monday",
    time: "10:28am",
    city: "Rotterdam",
    temperature: "15",
    description: "Cloudy",
    humidity: "80",
    windspeed: "2",
  };
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
                <span id='wind'>{weatherData.windspeed}</span>
                <span id='wind-units'>km/h</span>
              </div>
            </div>
          </div>
          <hr />
          <div id='forecast'></div>
          <hr />
          <div className='city-change'>
            <form id='city-search'>
              <div className='mb-3 change-city-input'>
                <input
                  type='text'
                  className=' form-control input-box'
                  id='input-city-box'
                  placeholder='Enter a new city'
                />
                <button type='submit' id='submit-city-button'>
                  Go
                </button>
              </div>
            </form>
            <button id='current-city-button'>Current location</button>
          </div>
        </div>
        <div className='col left'>
          <div className='current-info'>
            <span className='day'>{weatherData.day}</span>
            <span className='time'>{weatherData.time}</span>
            <span className='location' id='show-city-heading'>
              {weatherData.city}
            </span>
          </div>
          <div className='current-weather'>
            <img src={icon} alt='Clear' id='weather-icon-large' />
            <span className='temp-large'>
              <span id='temperature-large'>{weatherData.temperature}</span>
              <a href='/' id='celsius-link' className='active'>
                °C
              </a>
              <span id='unit-divider'> | </span>
              <a href='/' id='farenheit-link'>
                °F
              </a>
            </span>
            <span className='weather-description' id='weather-description'>
              {weatherData.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
