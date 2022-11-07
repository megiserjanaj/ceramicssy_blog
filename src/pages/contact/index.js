import * as React from "react";
import "./styles.scss";

import ScrollToTop from "../../components/scroll/ScrollToTop";
import Navigation from "../../components/header/Navigation";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";

import logo from "../../images/icons/ceramicssy_icon.png";

const Contact = () => {
  return (
    <div className="page--contact">
      <ScrollToTop />
      <Navigation />
      <h2>Get in touch</h2>
      <p>
        Contact Ceramicssy by completing the form below. Once you have submitted
        your enquiry, we will be in touch with you soon.
      </p>
      <Form />
      <h4>How to find Ceramicssy:</h4>
      <p>XYZ, Studio 12</p>
      <p>114 - 116 Kingsgate Road, West Hampstead, NW6 2JG London, UK</p>
      <p>+355 69 000 0000</p>
      <p>ceramicssy@gmail.com</p>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.564508566873!2d19.81869835!3d41.327544450000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1667388888475!5m2!1sen!2s"
          width="100%"
          height="600px"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

export const Head = () => (
  (<title>Contact Us</title>), (<link rel="icon" href={logo}></link>)
);
