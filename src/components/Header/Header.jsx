import React from "react";
import "./header.css";

const header = () => {
  return (
    <header id="home">
        <div className="container header__container">
          <div className="text-container">
            <h1>Kurzy Kreslení pravou mozkovou hemisférou</h1>
            <h5>Kurzy</h5>
            <div className="scroll__down">
            <a href="#contact" className="btn color-bg mg-top-8">Kontakt</a>
            <a href="#services" className="btn color-bg mg-top-8">Služby</a>
            </div>
          </div>
        </div>
    </header>
  );
};

export default header;
