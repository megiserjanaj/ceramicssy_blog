import * as React from "react";
import { useState, useEffect } from "react";

import "./styles.scss";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  const [screenWidth, setScreenWidth] = useState(width);

  const resizeFnx = () => {
    setScreenWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFnx);
    return () => {
      window.removeEventListener("resize", resizeFnx);
    };
  }, []);

  return (
    <div className="navbar">
      {screenWidth < 500 ? <MobileNavigation /> : <Navigation />}
    </div>
  );
};

export default Header;
