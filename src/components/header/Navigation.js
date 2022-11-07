import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";

import { navLinks } from "../../routes";

import "./styles.scss";

import ceramicssy_icon from "../../images/icons/ceramicssy_icon.png";

const Navigation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeFnx = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFnx);
    return () => {
      window.removeEventListener("resize", resizeFnx);
    };
  }, []);

  return (
    <div className="navbar">
      {screenWidth > 500 ? (
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
      ) : (
        <nav>
          <div type="button">
            <span class="bar"></span> <span class="bar"></span>
            <span class="bar"></span> <span>Menu</span>
          </div>
        </nav>
      )}
      <img
        src={ceramicssy_icon}
        alt="Ceramicssy icon"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default Navigation;
