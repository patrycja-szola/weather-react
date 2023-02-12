import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast ">
      <div className="row d-flex justify-content-center mt-3 mb-1">
        <div className="col-4">Thu</div>
        <div className="col-4">Icon</div>
        <div className="col-4">
          19° / <span className="tempMin">10°</span>
        </div>
      </div>
    </div>
  );
}
