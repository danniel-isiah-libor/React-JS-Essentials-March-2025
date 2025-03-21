import React from "react";
import Field from "./form/Field.jsx"

function Register() {
  const submit = () => {
    alert("Registered!")
  }

  return (
    <div>
      <Field label="Name"/>

      <br />
      <br />

      <Field label="Username"/>

      <br />
      <br />

      <Field label="Email" type="email"/>

      <br />
      <br />

      <Field label="Password" type="password"/>

      <br />
      <br />

      <Field label="Confirm Password" type="password"/>

      <br />
      <br />

      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;
