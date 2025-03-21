import React from "react";
import Field from "./form/Field";

export default function Register() {
  return (
    <div>
      <Field label="Name" type="text"/>

      <br />
      <br />

      <Field label="Username" type="text"/>

      <br />
      <br />

      <Field label="Email" type="email"/>

      <br />
      <br />

      <Field label="Password" type="password"/>

      <br />
      <br />

      <Field label="Confirm Password" type="password"/>

      <br/>
      <br/>

      <button>Register</button>
      
    </div>
  );
}
