import React from "react"
import Field from "../form/Field.jsx"


function Register() {
    const submit = () => {
        alert("Registered!")
    }

    return (
      <div>
        <br />
        <Field/>
        <br />
        <br />
  
        <Field label="Username" type="text"/>
  
        <br />
        <br />

        <Field label="email" type="email"/>


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