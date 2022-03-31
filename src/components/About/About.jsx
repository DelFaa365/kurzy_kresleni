import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import  Avatar  from '../../assets/avatar.jpg'

const about = () => {
  return (
    <section className="about__main" id="about">
      <h2>O mně</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ Avatar } alt="Avatar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Zkušenosti</h5>
              <small>Nevim asi jsem 5 let něco dělal</small>
            </article>
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Zkušenosti</h5>
              <small>Nevim asi jsem 5 let něco dělal</small>
            </article>
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Zkušenosti</h5>
              <small>Nevim asi jsem 5 let něco dělal</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nemo ad architecto quod illo neque numquam voluptas voluptatum animi
            dolore, excepturi alias earum, optio error dolor molestiae
            accusantium eligendi ab!
          </p>

          <a href="#contact" className="btn btn-primary">Kontakt</a>
        </div>
      </div>
    </section>
  );
};

export default about;
