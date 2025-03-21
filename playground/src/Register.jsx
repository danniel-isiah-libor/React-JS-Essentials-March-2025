import React from "react";
import Field from "./form/Field.jsx"
import Button from "./form/Button.jsx"

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

      <Button clickEvent={submit} label="Register"/>
    </div>
  );
}

export default Register;
