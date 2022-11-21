import * as React from "react";
import { Link } from "gatsby";

import { navLinks } from "../../routes";

import "./styles.scss";

import ceramicssy_icon from "../../images/icons/ceramicssy_icon.png";

const Navigation = () => {
  return (
    <div className="navbar--desktop">
      <nav>
        <ul>
          {navLinks.map((ele, i) => {
            return (
              <li key={i}>
                <Link to={ele.link}>{ele.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <img
        className="navbar--icon"
        src={ceramicssy_icon}
        alt="Ceramicssy icon"
      />
    </div>
  );
};

export default Navigation;
