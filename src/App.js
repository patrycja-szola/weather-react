import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Weather Search Engine</p>
        <Weather />
      </header>
    </div>
  );
}
