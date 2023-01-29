import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherTemperature from "./WeatherTemperature";

export default function Search() {
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [cityName, setCityName] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(
      <WeatherTemperature celcius={response.data.temperature.current} />
    );
    setDescription(response.data.condition.description);
    setHumidity(Math.round(response.data.temperature.humidity));
    setWind(Math.round(response.data.wind.speed));
    setCountry(response.data.country);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCityName(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()); //we wprowadzonym tekście pierwsza litera będzie duża, a reszta liter będzie mała
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
                <h1 className="mt-3 mb-0 ">
                  <strong>
                    {cityName}, {country}
                  </strong>
                </h1>
                <div className="text-center">
                  <img
                    src={icon}
                    width="35%"
                    alt=""
                    className="img-fluid rounded mt-0"
                  />
                </div>
              </div>
              <div className="col-6">
                <ul className="App-list mt-4">
                  <li className="App-list-header"></li>
                  <li>
                    Description:<strong> {description}</strong>
                  </li>
                  <li>Temperature: {temperature}</li>
                  <li>
                    Humidity:<strong> {humidity}%</strong>
                  </li>
                  <li>
                    Wind speed:<strong> {wind}km/h</strong>
                  </li>
                  <li></li>
                </ul>
              </div>
              <span className="App-footer">
                <a href="https://github.com/szyszka212/weather-react">
                  Open-sourced code{" "}
                </a>
                by Pati_
              </span>
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
          by <strong>Pati_</strong>
        </span>
      </div>
    );
  }
}
