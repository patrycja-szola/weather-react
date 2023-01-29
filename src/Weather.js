import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [cityName, setCityName] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCityName(city);
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
        autocomplete="off"
      />
      <input
        type="submit"
        value="Search"
        id="findButton"
        className="findButton"
      />
      <span className="col">
        <button
          type="button"
          id="currentLocationButton"
          className="findButton w-20"
        >
          Current Location
        </button>
      </span>
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
                <h1>
                  <strong>
                    <uppercase>{cityName}</uppercase>
                  </strong>
                </h1>
                <ul>
                  <li className="App-list-header">
                    Weather details updated: <br />
                    <strong>
                      <span id="dayTime"></span>
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src={icon} width="50%" alt="" />
                </div>
                <ul className="App-list">
                  <li className="App-list-header"></li>
                  <li>
                    Temperature:<strong> {temperature}°C</strong>
                  </li>
                  <li>
                    Description:<strong> {description}</strong>
                  </li>
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
