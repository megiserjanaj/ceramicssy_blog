import * as React from "react";
import { useState, useEffect } from "react";

import "./styles.scss";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  /* const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeFnx = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFnx);
    return () => {
      window.removeEventListener("resize", resizeFnx);
    };
  }, []); */

  return (
    <div className="navbar">
      {/* {screenWidth < 500 ? <MobileNavigation /> : <Navigation />} */}
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default Header;
