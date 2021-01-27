import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MenuProvider } from "./context";

ReactDOM.render(
  <MenuProvider>
    <App />
  </MenuProvider>,
  document.getElementById("root")
);

reportWebVitals();
