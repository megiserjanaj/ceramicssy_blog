import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

import { navLinks } from "../../routes";

import "./styles.scss";

import ceramicssy_icon from "../../images/icons/ceramicssy_icon.png";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar--mobile">
      <img
        className="navbar--icon"
        src={ceramicssy_icon}
        alt="Ceramicssy icon"
      />
      <nav>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span>{open ? "-" : "+"}</span>
        </div>
        {/* {open && (
          <ul>
            {navLinks.map((ele, i) => {
              return (
                <li key={i}>
                  <Link to={ele.link}>{ele.label}</Link>
                </li>
              );
            })}
          </ul>
        )} */}
      </nav>
    </div>
  );
};

export default MobileNavigation;
