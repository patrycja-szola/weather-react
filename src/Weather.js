import React from "react";
import axios from "axios";
import { Comment } from "react-loader-spinner";

// npm start - tym uruchamiam serwer
// Ctrl C - tym zatrzymuję serwer
// przed każdym załadowaniem nowej biblioteki, najlepiej zakończyć, potem załadować, wprowadzić zmiany w kodzie i wtedy dopiero rozpocząć od nowa

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apikey = "1a503fb7a97ad8050479d85fae658043";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Comment
      visible={true}
      height="100"
      width="100"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
}
