import React from "react";
import "./About.css";
import html from "../../assets/images/html-1.svg";
import css from "../../assets/images/css-3.svg";
import js from "../../assets/images/js.svg";
import react from "../../assets/images/react-2.svg";
import about from "../../assets/about.webp";
import man from "../../assets/man.png";
const About = ({ aboutRef }) => {
  return (
    <section id="about" ref={aboutRef}>
      <div className="about__container">
        <div className="home__stack">
          <h2>Tech Stack |</h2>

          <span className="stack">
            <img src={html} alt="html" width={50} />
          </span>
          <span className="stack">
            {" "}
            <img src={css} alt="css" width={50}></img>
          </span>
          <span className="stack">
            <img src={js} alt="js" width={50} />
          </span>
          <span className="stack">
            {" "}
            <img src={react} alt="react" width={50} />
          </span>
        </div>

        <div className="about__card">
          <div className="about__img">
            <img src={about} alt="notebook" width={600} />
          </div>

          <div className="about__card__text">
            <h4>About me</h4>
            <h2> Un desarrollador front-end Jr altamente motivado</h2>
            <p>
              {" "}
              Un desarrollador front-end Jr altamente motivado y apasionado por
              el desarrollo web con experiencia en HTML, CSS, JavaScript, React,
              Sass y Bootstrap. Busco una oportunidad para aplicar mis
              habilidades y aprender más en un entorno de trabajo desafiante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
