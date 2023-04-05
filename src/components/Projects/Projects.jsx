import React, { useRef } from "react";
import web from "../../assets/web.png";
import "./projects.css";
import cryto from "../../assets/cryto.png";
import axstore from "../../assets/axstore.png";
import tienda from "../../assets/tienda.png";
import { Link } from "react-router-dom";

const Projects = ({ projectsRef }) => {
  return (
    <section id="projects" ref={projectsRef}>
      <article className="projects">
        <div className="projects__card__title">
          <h4 className="projects_h4">Proyectos!</h4>
          <p className="projects_p">
            Cada proyecto es una pieza unica de desarrollo
          </p>
        </div>
        <div className="projects_cards">
          <div>
            <Link
              to="https://axels13.github.io/cryptosearch/"
              style={{ cursor: " pointer " }}
            >
              <img src={cryto} alt="web" width={600} height={400} />
            </Link>
          </div>
          <div className="projects__text">
            <h3>CrytoInfo</h3>
            <p>
              CrytoInfo es una aplicación criptográfica que permite a los
              usuarios buscar información sobre varias criptomonedas en tiempo
              real.{" "}
            </p>
          </div>
        </div>

        {/*  */}

        <div className="projects__secundary  projects_cards ">
          <div>
            <Link to="https://axels13.github.io/axdevstore/">
              <img src={axstore} alt="web" width={600} height={400} />
            </Link>
          </div>
          <div className="projects__text">
            <h3>AxDevStore</h3>
            <p>AxDevStore es una e-commerce sobre productos electronicos</p>
          </div>
        </div>

        {/*  */}

        <div className="projects_cards">
          <div>
            <Link to="https://axels13.github.io/axe-commerce/">
              <img src={tienda} alt="web" width={600} height={400} />
            </Link>
          </div>
          <div className="projects__text">
            <h3>RF E-Commerce</h3>
            <p>
              Con un enfoque en la simplicidad y el diseño limpio, esta tienda
              prioriza la experiencia del usuario, lo que facilita que los
              clientes encuentren y compren los productos que necesitan.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
