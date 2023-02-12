import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");
  let [icon, setIcon] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecast[0].condition.icon}.png`
    );
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast ">
        <WeatherForecastDay data={forecast[0]} icon={icon} />
      </div>
    );
  } else {
    let apiKey = "ea5bo889dfa0b4td5adbc7d7388af13a";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
