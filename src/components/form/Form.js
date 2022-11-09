import * as React from "react";
import { useState } from "react";
import { db } from "../../firebase";
// import emailjs from "@emailjs/browser";
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

  // const form = useRef();

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

    /* emailjs
      .sendForm(
        "service_focidb2",
        "template_p94k6jq",
        form.current,
        "6Md7JxLUTFVlBPvKU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); */

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
    if (fname && fname && email && message && message) {
      empty = {};
    } else {
      empty = {
        border: "1px solid red",
      };
    }
    return empty;
  };

  return (
    <div className="" id="contactForm">
      <div className="">
        <form onSubmit={sendContactForm} className="">
          <div className="">
            <div className="">
              <label htmlFor="fname" className="">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                // style={checkIfEmpty()}
                className=""
                tabIndex={1}
                autoComplete="off"
              />
              <p className="form--input--error">{fnameError}</p>
            </div>
            <div className="">
              <label htmlFor="lname" className="">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                className=""
                tabIndex={2}
                autoComplete="off"
              />
              <p className="form--input--error">{lnameError}</p>
            </div>
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(validateEmail(e.target.value));
              }}
              className=""
              tabIndex={3}
              autoComplete="off"
            />
            <p className="form--input--error" style={{ color: "red" }}>
              {emailError}
            </p>
          </div>
          <div className="">
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className=""
              tabIndex={4}
              autoComplete="off"
            ></textarea>
            <p className="form--input--error">{messageError}</p>
          </div>
          <div className="">
            <button
              type="submit"
              onClick={sendContactForm}
              style={checkIfDisabled()}
              className=""
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
