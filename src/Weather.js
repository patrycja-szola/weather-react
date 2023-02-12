import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";

export default function Search() {
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [pressure, setPressure] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [cityName, setCityName] = useState("");
  let [date, setDate] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(
      <WeatherTemperature celcius={response.data.temperature.current} />
    );
    setDescription(
      response.data.condition.description.charAt(0).toUpperCase() +
        response.data.condition.description.slice(1).toLowerCase()
    );
    setPressure(response.data.temperature.pressure);
    setHumidity(Math.round(response.data.temperature.humidity));
    setWind(Math.round(response.data.wind.speed));
    setCountry(response.data.country);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
    setDate(new Date(response.data.time * 1000));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCityName(city.toUpperCase());
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ea5bo889dfa0b4td5adbc7d7388af13a&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city"
        onChange={updateCity}
        autoComplete="off"
      />
      <input
        type="submit"
        value="Search"
        id="findButton"
        className="btn btn-primary m-3"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <div className="main-border">
          <div className="weather-app">
            <div className="row">
              <div className="col-6">
                <h1 className="WeatherMain">
                  <strong>
                    {cityName}
                    <br /> {country}
                  </strong>
                </h1>
                <div className="text-center">
                  <img
                    src={icon}
                    width="50%"
                    alt=""
                    className="img-fluid rounded mt-0 mb-0"
                  />
                  <span className="TemperatureDisplay">
                    <strong> {temperature}</strong>
                  </span>
                </div>
                <div>
                  <ul className="App-list text-center mt-1">
                    <li>
                      <strong> {description}</strong>
                    </li>
                    <li>
                      Pressure:<strong> {pressure} hPa</strong>
                    </li>
                    <li>
                      Humidity:<strong> {humidity}%</strong>
                    </li>
                    <li>
                      Wind:<strong> {wind} km/h</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-6">
                <div className="row mt-5">
                  <WeatherForecast icon={icon} />
                </div>
                <div className="row">
                  <WeatherForecast icon={icon} />
                </div>
                <div className="row">
                  <WeatherForecast icon={icon} />
                </div>
                <div className="row">
                  <WeatherForecast icon={icon} />
                </div>
                <div className="row">
                  <WeatherForecast icon={icon} />
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <span className="App-footer">
                <a href="https://github.com/szyszka212/weather-react">
                  Open-sourced code{" "}
                </a>
                by Patrycja Szoła
              </span>

              <div>
                <FormattedDate date={date} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <span className="App-footer">
          <a href="https://github.com/szyszka212/weather-react">
            Open-sourced code{" "}
          </a>
          by <strong>Patrycja Szoła</strong>
        </span>
      </div>
    );
  }
}
