import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="TemperatureConverter">
          <strong> {Math.round(props.celcius)}</strong>°C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="TemperatureConverter">
          <strong>{Math.round((props.celcius * 9) / 5 + 32)}</strong>
          <a href="/" onClick={convertToCelcius}>
            °C{" "}
          </a>{" "}
          | °F{" "}
        </span>
      </span>
    );
  }
}
