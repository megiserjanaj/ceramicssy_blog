import * as React from "react";
import { Link } from "gatsby";
import "./styles.scss";

import ScrollToTop from "../../components/scroll/ScrollToTop";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

import { enroll } from "../../enrollCard";

import logo from "../../images/icons/ceramicssy_icon.png";
import image4 from "../../images/image4.jpg";

const Enroll = () => {
  return (
    <div className="page--enroll">
      <ScrollToTop />
      <Header />
      <h2>Enroll now</h2>
      <img src={image4} alt="" className="page--enroll--parallax" />
      <div className="page--enroll--cards">
        {enroll.map(({ title, text, price, label, link, i }) => {
          return (
            <Card title={title} text={text} footnote={price} key={i}>
              <Link to={link}>{label}</Link>
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Enroll;

export const Head = () => (
  (<title>Enroll</title>), (<link rel="icon" href={logo}></link>)
);
