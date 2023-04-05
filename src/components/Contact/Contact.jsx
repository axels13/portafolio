import React, { useRef } from "react";
import "./Contact.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} id="contact">
      <div className="contact__card__title">
        <div className="contact__title">
          <h4>Contact</h4>
          <h2>Haz Click aca abajo!👇</h2>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__card">
          <div className="contact__email">
            <div className="contact__email-card">
              <span className="contact__circle__icon">
                <FaMapMarkedAlt className="icon_contact_location" />
              </span>
              <h4>Location</h4>
              <span className="span_grey">Mar del plata, Argentina</span>
            </div>

            <div className="contact__email-card">
              <span className="contact__circle__icon">
                <HiOutlineMailOpen className="icon_contact_email" />
              </span>
              <h4>Email</h4>
              <span className="span_grey">
                <Link to="mailto:axel_cadona@hotmail.com">
                  axel_cadona@hotmail.com
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
