import React from "react";
import "./services.css";
import Automaticka from "../Details/Automaticka/Automaticka";
import { Link } from "react-router-dom";

const services = () => {
  return (
    <section id="services">
      <h2>Služby</h2>
      <div className="container services__cards">
        <div className="services__card">
          <div className="services__card-side front">
            <h3>Kurz kreslení pravou mozkovou hemisférou</h3>
            <h4>Klikni pro zobrazení podrobností</h4>
          </div>
          <div className="services__card-side back">
          <div className="services__card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat
            </div>
            <div className="services__card-btn">
            <Link to="prava-hemisfera">
              <button className="btn btn-primary">Dlaší podrobnosti</button>
            </Link>
            </div>
          </div>
        </div>
        <div className="services__card">
          <div className="services__card-side front">
            <h3>Automatická Kresba</h3>
            <h4>Klikni pro zobrazení podrobností</h4>
          </div>
          <div className="services__card-side back">
            <div className="services__card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ut, voluptas deleniti sit excepturi modi ratione, repellat
              voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat
            </div>
            <div className="services__card-btn">
            <Link to="automaticka">
              <button className="btn btn-primary">Dlaší podrobnosti</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
