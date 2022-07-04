import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className='WeatherTemperature'>
      <span className='temp-large'>
        <span id='temperature-large'>{Math.round(props.celsius)}</span>
        <a href='/' id='celsius-link' className='active'>
          °C
        </a>
        <span id='unit-divider'> | </span>
        <a href='/' id='farenheit-link'>
          °F
        </a>
      </span>
    </div>
  );
}
