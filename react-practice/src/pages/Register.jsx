import React, { useState,useEffect } from "react";
import Field from "../form/Field";

export default function Register() {
  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    confirmpassword:""
  });

const errorMessages = {
  name:"Name is required",
  username:"",
  email:"",
  password:"",
  confirmpassword:""
}
const [errors, setErrors] = useState(errorMessages)


  
  useEffect(()=>{
    console.log(user)
  },[user])
  const submit = () => {
    console.log(user);
    alert("Registered!!!!!!");
  };
  const validate = ()=>{
    if(!user.name){
      
    }
  }
  const onChange = (d, e) => {
    setUser({
      ...user,
      [e]: d,
    });
  };
  return (
    <div>
      <a href="/login">Login Here</a>
      <Field label="Name" name="name" onChange={onChange} />
      
      <br />
      <br />

      <Field label="Username" name="username" onChange={onChange} />

      <br />
      <br />

      <Field label="Email" type="email" name="email" onChange={onChange} />

      <br />
      <br />

      <Field
        label="Password"
        type="password"
        name="password"
        onChange={onChange}
      />

      <br />
      <br />

      <Field
        label="Confirm Password"
        type="password"
        name="confirmpassword"
        onChange={onChange}
      />

      <br />
      <br />

      <button onClick={submit}>Register</button>
    </div>
  );
}
