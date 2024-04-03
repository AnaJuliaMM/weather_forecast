import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="searchDiv">
      <span className="inputSpan">
        <input type="text" />
      </span>
      <span className="inputSpan">
        <input type="button" value="Buscar" />
      </span>
    </div>
  );
}
