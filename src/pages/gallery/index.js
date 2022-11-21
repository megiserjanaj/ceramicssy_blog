import * as React from "react";
import "./styles.scss";

import ScrollToTop from "../../components/scroll/ScrollToTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import logo from "../../images/icons/ceramicssy_icon.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image5 from "../../images/image5.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.jpg";
import image11 from "../../images/image11.jpg";

const Gallery = () => {
  return (
    <div className="page--gallery">
      <ScrollToTop />
      <Header />
      <h2>Gallery</h2>
      <div class="page--gallery--item">
        <div class="page--gallery--item--1">
          <img src={image1} alt="" />
        </div>
        <div class="page--gallery--item--2">
          <img src={image2} alt="" />
        </div>
        <div class="page--gallery--item--3">
          <img src={image3} alt="" />
        </div>
        <div class="page--gallery--item--5">
          <img src={image5} alt="" />
        </div>
        <div class="page--gallery--item--7">
          <img src={image7} alt="" />
        </div>
        <div class="page--gallery--item--8">
          <img src={image8} alt="" />
        </div>
        <div class="page--gallery--item--9">
          <img src={image9} alt="" />
        </div>
        <div class="page--gallery--item--10">
          <img src={image10} alt="" />
        </div>
        <div class="page--gallery--item--11">
          <img src={image11} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

export const Head = () => (
  (<title>Gallery</title>), (<link rel="icon" href={logo}></link>)
);
