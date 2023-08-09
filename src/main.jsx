import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useState, useEffect } from "react";

const [countryName, setCountryName] = useState(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App countryName={countryName} setCountryName={setCountryName} />
  </React.StrictMode>
);
