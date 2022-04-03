import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePi, triplePi } from "./math";

// default values are not case sensitive
// double pi and triple pi are  case sensitive

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
