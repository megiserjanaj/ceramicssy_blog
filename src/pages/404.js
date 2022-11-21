import * as React from "react";
import { Link } from "gatsby";

const errorPage = {
  marging: "2rem auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
};

const errorPageh1 = {
  margin: "0",
  fontSize: "8rem",
};

const errorPageh2 = {
  margin: "0",
  fontSize: "2rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const errorPageP = {
  marginTop: "2rem",
};

const errorPageA = {
  color: "#cf1616",
  fontWeight: "600",
  textDecoration: "none",
};

const NotFoundPage = () => {
  return (
    <div className="error-page" style={errorPage}>
      <h1 style={errorPageh1}>404</h1>
      <h2 style={errorPageh2}>Page not found</h2>
      <p style={errorPageP}>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? <></> : null}
        <br />
        <Link to="/" style={errorPageA}>
          Go home&nbsp;&rarr;
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
