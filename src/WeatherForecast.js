import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <img
              src={props.icon}
              width="60%"
              alt=""
              className="img-fluid rounded mt-0"
            />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
