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
          className="toggler"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BM8K0P6UhJnZ2UyM51c2aqLcsUMKsa6XvoGCaB6xXRQ7e6ee_ckHC4J7cTZo2f7M4OA&usqp=CAU" />
          ) : (
            <img src="https://i.postimg.cc/j5RRCtb2/menu.png" />
          )}
        </div>
        {open && (
          <ul>
            {navLinks.map((ele, i) => {
              return (
                <li key={i}>
                  <Link to={ele.link}>{ele.label}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default MobileNavigation;
