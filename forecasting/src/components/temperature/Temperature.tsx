import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="temperatureDiv">
      <p>Sorocaba</p>
      <p className="temperature">19°C</p>
      <p>Nublado</p>
      <span className="temperatureLine">
        <p>
          <strong>Vento:</strong> X km/h
        </p>
        <p>
          <strong>Umidade:</strong> Y%
        </p>
      </span>
    </div>
  );
}
