import React from "react";
import { render } from "react-dom";
import "../public/css/popup.css";

function Popup() {
  return (
    <div>
      <h1> hello </h1>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
