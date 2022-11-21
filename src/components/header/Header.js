import * as React from "react";
import { useState, useEffect } from "react";

import "./styles.scss";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const width = typeof window !== "undefined";

  const [screenWidth, setScreenWidth] = useState(window.width);

  const resizeFnx = () => {
    setScreenWidth(window.width);
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
