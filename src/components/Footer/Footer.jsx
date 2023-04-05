import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-card">
        <span className="footer-copy">
          Copyright ©2023.All rights are reserved
        </span>

        <span className="footer-icons">
          <Link to="https://github.com/axels13" target="_black">
            <span>
              <AiFillGithub />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/axel-cadona-137b57215/"
            target="_black"
          >
            <span>
              <AiFillLinkedin />
            </span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
