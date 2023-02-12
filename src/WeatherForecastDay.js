import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="row d-flex justify-content-center mt-3 mb-1">
      <div className="col-3">{day()}</div>
      <div className="col-3">
        <img
          src={props.icon}
          width="45%"
          alt=""
          className="img-fluid rounded mt-0 mb-0"
        />
      </div>
      <div className="col-3">
        {maxTemp()}° / <span className="tempMin">{minTemp()}°</span>
      </div>
    </div>
  );
}
