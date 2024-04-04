import React, { useState } from "react";
import "./Search.css";

const apiKey = "8290a9f4b4302fad3f55ebc9b4c1cf79";

export default function Search() {
  const [value, setValue] = useState('');
  const [cityName, setCityName] = useState('')

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const handleInputText = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setCityName(value)  
    request()
  };

  const request = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="searchDiv">
      <span className="inputSpan">
        <input type="text" onChange={(event) => handleInputText(event)} />
      </span>
      <span className="inputSpan">
        <input type="button" value="Buscar" onClick={handleClick} />
      </span>
    </div>
  );
}
