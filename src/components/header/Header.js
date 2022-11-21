import * as React from "react";
import { useState, useEffect } from "react";

import "./styles.scss";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  typeof window !== "undefined";
  const module = typeof window !== "undefined" ? require("module") : null;
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
      {screenWidth < 500 ? <MobileNavigation /> : <Navigation />}
    </div>
  );
};

export default Header;
