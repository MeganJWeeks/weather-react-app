import React from "react";
import FormattedDate from "./FormattedDate";
//import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className='weather-info'>
      <div className='current-info'>
        <FormattedDate date={props.data.date} />
        <span className='location' id='show-city-heading'>
          {props.data.city}
        </span>
      </div>
      <div className='current-weather'>
        <img
          src={`icons/${props.data.icon}.svg`}
          alt='Clear'
          id='weather-icon-large'
        />
        <WeatherTemperature celsius={props.data.temperature} />

        <span className='weather-description' id='weather-description'>
          {props.data.description}
        </span>
      </div>
    </div>

    // <div className="WeatherInfo">
    //
    //     <li>
    //       <FormattedDate date={props.data.date} />
    //     </li>
    //     <li className="text-capitalize">{props.data.description}</li>
    //   </ul>
    //   <div className="row mt-3">
    //     <div className="col-6">
    //       <div className="clearfix">
    //         <div className="float-left">
    //           <WeatherIcon code={props.data.icon} size={52} />
    //         </div>

    //         <div className="float-left">
    //           <WeatherTemperature celsius={props.data.temperature} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-6">
    //       <ul>
    //         <li>Humidity: {props.data.humidity}%</li>
    //         <li>Wind: {props.data.wind} km/h</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}
