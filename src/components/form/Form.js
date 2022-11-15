import * as React from "react";
import { useState } from "react";
import { db } from "../../firebase";
import "./styles.scss";

const Form = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [fnameError, setFnameError] = useState();
  const [lnameError, setLnameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  const sendContactForm = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        fname: fname,
        lname: lname,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };

  const validateEmail = (input) => {
    var validMail = String(input)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validMail) {
      setEmailError("");
      return input;
    } else {
      setEmailError("Please enter a valid email!");
    }
  };

  const checkIfDisabled = () => {
    var disabled = false;
    if (fname && lname && email && message) {
      disabled = {};
    } else {
      disabled = {
        pointerEvents: "none",
        opacity: "0.7",
      };
    }
    return disabled;
  };

  const checkIfEmpty = () => {
    var empty = false;
    if (fname && lname && email && message) {
      empty = {};
    } else {
      empty = {
        border: "1px solid #cf1616",
      };
    }
    return empty;
  };

  return (
    <div className="contact--form" id="contactForm">
      <form onSubmit={sendContactForm} className="">
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="First Name"
          onChange={(e) => {
            setFname(e.target.value);
          }}
          style={checkIfEmpty()}
          className=""
          tabIndex={1}
          autoComplete="off"
        />
        <p className="form--input--error">{fnameError}</p>
        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="Last Name"
          onChange={(e) => {
            setLname(e.target.value);
          }}
          style={checkIfEmpty()}
          tabIndex={2}
          autoComplete="off"
        />
        <p className="form--input--error">{lnameError}</p>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(validateEmail(e.target.value));
          }}
          tabIndex={3}
          autoComplete="off"
        />
        <p className="form--input--error" style={{ color: "#cf1616" }}>
          {emailError}
        </p>
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={message}
          placeholder="..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          tabIndex={4}
          autoComplete="off"
        ></textarea>
        <p className="form--input--error">{messageError}</p>
        <button
          type="submit"
          onClick={sendContactForm}
          style={checkIfDisabled()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
