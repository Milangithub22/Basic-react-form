import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [summited, setSummited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInput = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };

  const handleLastNameInput = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };

  const handleEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSummited(true);
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
  };

  return (
    <div className="form-container ">
      <form className="register-form" onSubmit={handleSubmit}>
        {summited && valid ? (
          <div className="success-message">
            Success. Thank you for registering.
          </div>
        ) : null}

        <input
          onChange={handleFirstNameInput}
          value={values.firstname}
          type="text"
          name="firstname"
          placeholder="First name"
          className="form-field"
        />
        {summited && !values.firstname ? (
          <span className="error">Please enter a first name!</span>
        ) : null}

        <input
          onChange={handleLastNameInput}
          value={values.lastname}
          type="text"
          name="lastname"
          placeholder="Last name"
          className="form-field"
        />
        {summited && !values.firstname ? (
          <span className="error">Please enter a last name!</span>
        ) : null}

        <input
          onChange={handleEmailInput}
          value={values.email}
          type="text"
          name="email"
          placeholder="Email"
          className="form-field"
        />
        {summited && !values.firstname ? (
          <span className="error">Please enter an email address!</span>
        ) : null}

        <button type="sumbit" className="form-field">
          Register
        </button>
      </form>
    </div>
  );
}
