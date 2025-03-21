import React from "react";
import Field from "../form/Field";

export default function Register() {
  const submit = ()=>{
    alert("Registered!!!!!!")
  }
  return (
    <div>
      <a href='/login'>Login Here</a>
      <Field label="Name" />

      <br />
      <br />

      <Field label="Username" />

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

      <button
        onClick={submit}
      >Register</button>
      
    </div>
  );
}
