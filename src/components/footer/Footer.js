import * as React from "react";
import { Link } from "gatsby";
import "./styles.scss";

import logo from "../../images/icons/ceramicssy_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--cols">
        <div>
          <img src={logo} alt="Ceramicssy logo" />
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul class="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>More</h3>
          <h4>+355 69 000 0000&nbsp;&nbsp;|&nbsp;&nbsp;ceramicssy@gmail.com</h4>
          <div className="footer--enroll--link">
            <Link to="/enroll">Enroll now&nbsp;&rarr;</Link>
          </div>
        </div>
      </div>
      <p className="credits">&copy;&nbsp;Megi Serjanaj, November 2022.</p>
    </div>
  );
};

export default Footer;
