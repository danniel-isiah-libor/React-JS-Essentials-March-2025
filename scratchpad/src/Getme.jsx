import React from "react";
import Field from "./form/Field.jsx";
import Button from '.form/Button.jsx'

function Getme() {
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


      <button onClick={submit}>Register</button>
      {/* <Button clickEvent={submit} label='' */}
    </div>
  );
}

export default Getme;
