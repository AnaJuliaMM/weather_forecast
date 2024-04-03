import React from "react";
import "./Forecast.css";
import Card from "../card/Card.tsx";

export default function Forecast() {
  return (
    <div>
      <Card value={0} />
      <Card value={1} />
      <Card value={2} />
      <Card value={3} />
    </div>
  );
}
