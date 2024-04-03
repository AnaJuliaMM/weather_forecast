import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="temperatureDiv">
      <p>Sorocaba</p>
      <p className="temperature">19°C</p>
      <p>Nublado</p>
      <span className="temperatureLine">
        <p>Vento: X km/h</p>
        <p>Umidade: Y%</p>
      </span>
    </div>
  );
}
