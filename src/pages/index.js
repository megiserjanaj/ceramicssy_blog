import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.scss";
import "../styles/main.scss";
import logo from "../images/icons/ceramicssy_icon.png";
import headerVideo from "../videos/production ID_4683409.mp4";

import ScrollToTop from "../components/scroll/ScrollToTop";
import Video from "../components/video/Video";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";

import About from "./about";
import Gallery from "./gallery";
import Contact from "./contact";
import NotFoundPage from "./404";

import { navLinks } from "../routes";

const IndexPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const resizeFnx = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFnx);
    return () => {
      window.removeEventListener("resize", resizeFnx);
    };
  }, []);

  const aboutSection = useRef(undefined);
  const gallerySection = useRef(undefined);
  const contactSection = useRef(undefined);

  return (
    <div className="page--home">
      <Video src={headerVideo} type="video/mp4" title="Ceramicssy" />
      <h1>Ceramicssy</h1>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <div className="page--home--sections--nav">
        {screenWidth > 500 ? (
          <div className="header--navigation--desktop">
            <nav>
              <ul>
                <li>Home</li>
                <li
                  onClick={() =>
                    aboutSection.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About
                </li>
                <li
                  onClick={() =>
                    gallerySection.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Gallery
                </li>
                <li
                  onClick={() =>
                    contactSection.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Contact
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <div className="header--navigation--mobile">
            <nav>
              <div
                className="toggler"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BM8K0P6UhJnZ2UyM51c2aqLcsUMKsa6XvoGCaB6xXRQ7e6ee_ckHC4J7cTZo2f7M4OA&usqp=CAU"
                    alt=""
                  />
                ) : (
                  <img src="https://i.postimg.cc/j5RRCtb2/menu.png" alt="" />
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
        )}
      </div>
      <div className="section">
        <div className="section--about" ref={aboutSection}>
          <Card
            title="About Us"
            text={[
              <p>
                Ceramicssy is an intimate, creative space accessible to anyone
                who shares a passion for clay and ceramics, from total beginners
                to professional artists.
              </p>,
              <p>
                Our mission is to create beautiful ceramics artwork and to
                cultivate a great sense of well-being and personal growth. And
                of course, one of the best rewards of practising with clay is
                that it's just plain fun.
              </p>,
            ]}
          >
            <Link to="/about">More&nbsp;&rarr;</Link>
          </Card>
        </div>
        <div className="section--gallery" ref={gallerySection}>
          <Card
            title="Gallery"
            text={[
              <p>
                Our classes and workshops are a creative journey through the
                medium of clay, covering techniques from hand building, throwing
                on a pottery wheel to glazing and firing.{" "}
              </p>,
              <p>
                At Ceramicssy you will learn how to join clay, press into
                plaster moulds to add relief onto plates, cups vases or whatever
                sparks your imagination.
              </p>,
            ]}
          >
            <Link to="/gallery">More&nbsp;&rarr;</Link>
          </Card>
        </div>
        <div className="section--contact" ref={contactSection}>
          <Card
            title="Contact Us"
            text={[
              <div>
                <p>
                  We hold regular classes and workshops throughout the year for
                  students of all levels with an enthusiasm for ceramics and a
                  desire to develop and practice their skills.
                </p>
                <p>For more details, please contact us.</p>
              </div>,
            ]}
          >
            <Link to="/contact">More&nbsp;&rarr;</Link>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  (<title>Ceramicssy</title>), (<link rel="icon" href={logo}></link>)
);
