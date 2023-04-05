import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
const Navbar = ({ homeRef, projectsRef, contactRef, aboutRef }) => {
  const [show, setShow] = useState(false);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProyects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <header>
      <nav className="header__container">
        <div className="header__logo">
          <h3>Axel.dev</h3>
        </div>
        <button className="button" onClick={toggleMenu}>
          <span>
            <BiMenu />
          </span>
        </button>

        <ul className={`nav_menu  ${show ? "nav_menu open" : ""}`}>
          <span className="close" onClick={toggleMenu}>
            <AiOutlineClose />
          </span>

          <li>
            <Link to="/" onClick={scrollToHome}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={scrollToAbout}>
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={scrollToProyects}>
              Proyects
            </Link>
          </li>
          <li>
            <Link to="/" onClick={scrollToContact}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>

        <ul className="header_icons">
          <li>
            <Link to="https://github.com/axels13" target="_black">
              <span>
                <AiFillGithub />
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/axel-cadona-137b57215/"
              target="_black"
            >
              <span>
                <AiFillLinkedin />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
