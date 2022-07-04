import React from "react";

export default function FormattedDate(props) {
  // let weatherData = {
  //   day: "Monday",
  //   time: "10:28am",
  //   city: "Rotterdam",
  //   temperature: "15",
  //   description: "Cloudy",
  //   humidity: "80",
  //   windspeed: "2",
  // };
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <span className='day'>{day}</span>
      <span className='time'>
        {hours}:{minutes}
      </span>
    </div>
  );
}
