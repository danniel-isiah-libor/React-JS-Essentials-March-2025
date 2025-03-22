import React from "react";
import Field from "../form/Field.jsx";
import Button from '../Button.jsx'

function Register() {
  const submit = () => {
    alert("Registered!");
    }
  return (
    <div>
      <Field label="Name" type="text" />

      <br />

      <Field label="UserName" type="text" />
      {/* <label>UserName</label>
      <input type="text" /> */}
      <br />

      <Field label="Email" type="email" />
      {/* <label>Email</label>
      <input type="email" /> */}
      <br />

      <Field label="Password" type="password" />
      {/* <label>Password</label>
      <input type="password" /> */}
      <br />

      <Field label="Confirm Password" type="password" />
      {/* <label>Confirm Password</label>
      <input type="password" /> */}
      <br />

      <button onClick={submit}>Register</button>
      {/* <Button clickEvent={submit} label='' */}

        <a href="/login">Login Here</a>
    </div>
  );
}

export default Register;
