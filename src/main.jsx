import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css";

import _ from 'lodash';
import App from "./App";
window._ = _;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
