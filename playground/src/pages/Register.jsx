import React from "react";
import Field from "../form/Field.jsx";
import Button from "../form/Button.jsx";
function Register() {
  const submit = () => {
    alert("Register");
  };

  return (
    <div>
      
      <Field label="Name" type="text" />

      <Field label="Username" type="text" />

      <Field label="Email" type="email" />

      <Field label="Password" type="password" />

      <Field label="Confirm password" type="password" />

      <Button click={submit} text="Register" />
      <br />
      <a href="/profile">Go to Profile</a>
    </div>
  );
}

export default Register;
