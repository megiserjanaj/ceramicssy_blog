import * as React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Card = ({ title, text, src, alt, footnote, link, label, children }) => {
  return (
    <div className="card">
      <div className="copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={src} alt={alt} />
        <p>{footnote}</p>
      </div>
      <div className="link">{children}</div>
    </div>
  );
};

Card.defaultProps = {
  title: "",
  text: "",
  src: "",
  alt: "",
  footnote: "",
  link: "",
  linkLabel: "",
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  footnote: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
};

export default Card;
