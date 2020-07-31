import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../src/components/app/app";
import "./reset.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
