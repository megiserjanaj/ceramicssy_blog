import * as React from "react";
import { useState, useEffect } from "react";

import "./styles.scss";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import helper, { getWinSize } from "../../utils/helper";

const Header = () => {
const windowWidth=getWinSize().width;

  const [screenWidth, setScreenWidth] = useState(windowWidth);

  const resizeFnx = () => {
    setScreenWidth(windowWidth);
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
