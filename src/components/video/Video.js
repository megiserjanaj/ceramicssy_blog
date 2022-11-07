import * as React from "react";
import PropTypes from "prop-types";

const Video = ({ src, type, title }) => {
  return (
    <div className="video">
      <video autoPlay muted loop title={title}>
        <source src={src} type={type} />
        Sorry, your browser doesn't support this video.
      </video>
    </div>
  );
};

Video.defaultProps = {
  src: "",
  title: "",
  type: "video/mp4",
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default Video;
