import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>

        <Weather />
      </header>
    </div>
  );
}
