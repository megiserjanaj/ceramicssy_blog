import * as React from "react";
import "./styles.scss";

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    });
  }, []);

  return (
    <>
      {scrollVisible && (
        <div className="scroll-top" onClick={scrollToTop}></div>
      )}
    </>
  );
};

export default ScrollToTop;
