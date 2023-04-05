import React, { useRef } from "react";
import io from "./axel.jpg";
import "./home.css";

import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";

const Home = ({ homeRef, projectsRef, contactRef, aboutRef }) => {
  return (
    <>
      <section id="home" ref={homeRef}>
        <aside className="home__container">
          <div className="home__container_text">
            <h2>Front-end React Developer 👋</h2>

            <p>
              Hola, Mi nombre es Axel Agustin Cadona. Soy de argentina, Mar del
              plata.
            </p>
          </div>
          <div>
            <img
              src={io}
              alt=""
              width={400}
              height={450}
              className="home__img"
            />
          </div>
        </aside>
      </section>
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default Home;
