import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Automaticka from "./components/Details/Automaticka/Automaticka";
import PravaHemisfera from "./components/Details/PravaHemisfera/PravaHemisfera"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/automaticka" element={<Automaticka />}></Route>
        <Route path="/prava-hemisfera" element={<PravaHemisfera />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
