import React from "react";
import "./Card.css";

export default function Card({ weekday, temperature, weather_condition  }) {
  return (
    <div className="cardDiv">
      <h3>{weekday}</h3>
      <h2>{temperature}°C</h2>
      <h4>{weather_condition}</h4>
    </div>
  );
}
