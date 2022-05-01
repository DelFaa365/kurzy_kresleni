import React from "react";
import "./services.css";

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
            <div className="services__card-side back">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero, modi accusamus quasi minus non omnis nemo praesentium voluptatum odit eaque quidem, libero sit quae, excepturi commodi assumenda inventore reprehenderit.</div>
          </div>
          <div className="services__card">
            <div className="services__card-side front">
              <h3>Automatická Kresba</h3>
              <h4>Klikni pro zobrazení podrobností</h4>
            </div>
            <div className="services__card-side back">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ut, voluptas deleniti sit excepturi modi ratione, repellat voluptatum quaerat explicabo molestiae dolore dolores ullam fugiat cum autem nam placeat enim!  <button className="btn btn-primary">Dlaší podrobnosti</button></div>
          </div>
        </div>
    </section>
  );
};

export default services;
