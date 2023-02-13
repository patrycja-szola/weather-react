import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  let icon = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="row d-flex justify-content-center mt-1 mb-1">
      <div className="col-1 mb-0 ">{day()}</div>
      <div className="col-3 mb-0 ">
        <img
          src={icon}
          width="40%"
          alt=""
          className="img-fluid rounded mt-0 mb-0 pt-0"
        />
      </div>
      <div className="col-4 ">
        <FontAwesomeIcon icon={faTemperatureArrowUp} /> {maxTemp()}°{"      "}
        <span className="invisible">...</span>
        {"    "}
        <span className="tempMin">
          <FontAwesomeIcon icon={faTemperatureArrowDown} /> {minTemp()}°
        </span>
      </div>
      <div className="col-3  ">
        {" "}
        <FontAwesomeIcon icon={faWind} /> {Math.round(props.data.wind.speed)}{" "}
        km/h
      </div>
    </div>
  );
}
