import React from "react";
import Field from "../Form/Field.jsx";

function Register() {
  const submit = () => {
    alert("Registered");
  };

  return (
    <div>
      <Field label="Name:" type="text" />

      <br />
      <br />

      <Field label="Username:" type="text" />

      <br />
      <br />

      <Field label="Email:" type="email" />

      <br />
      <br />

      <Field label="Password:" type="password" />

      <br />
      <br />

      <Field label="Confirm Password:" type="password" />

      <br />
      <br />

      <button onClick={submit}>Register</button>
      <a href="/login">Login Here</a>
    </div>
  );
}

export default Register;
