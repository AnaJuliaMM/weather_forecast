import React from "react";
import "./Forecast.css";
import Card from "../card/Card.tsx";

export default function Forecast() {
  return (
    <div className="forecastDiv">
      <Card weekday='Segunda' temperature={0} weather_condition='Nublado'/>
      <Card weekday='Terça' temperature={1} weather_condition='Nublado'/>
      <Card weekday='Quarta' temperature={2} weather_condition='Nublado'/>
      <Card weekday='Quinta' temperature={3} weather_condition='Nublado'/>
      <Card weekday='Sexta' temperature={4} weather_condition='Nublado'/>
      <Card weekday='Sábado' temperature={5} weather_condition='Nublado'/>
      <Card weekday='Domingo' temperature={6} weather_condition='Nublado'/>
    </div>
  );
}
