import React, { useState } from "react";
import Field from "../Forms/Field";

export default function Register() {
  const [form, setForm] = useState({
    name: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const onChange = (e) => {
    console.log("EEE", e.target.name)
    const {name, value} = e.target
    setForm({...form,
      [name] : value
    })

  }
  console.log(form)
  const submit = (data) => {
    alert(`Name: ${data.name}`)
  };


  return (
    <div>
      <h1>Register</h1>
      <Field label={"Name: "} onChange={onChange} name="name" />
      <br />
      <Field label="Username :" onChange={onChange} name="username"/>
      <br />
      <Field type="email" label="Email :" onChange={onChange} name="email"/>
      <br />
      <Field type="password" label="Password :" onChange={onChange} name="password"/>
      <br />
      <Field type="password" label="Confirm Password :" onChange={onChange} name="confirmPassword"/>
      <br />
      <div className="flex justify-center space-x-2">
        <button className="px-2 py-1 border rounded bg-blue-400 text-white text-sm" onClick={() => submit(form)}>
          Register
        </button>
        <a
          href="/login"
          className="hover:text-blue-500 self-center text-sm border rounded px-2 py-1"
        >
          Login here
        </a>
      </div>
    </div>
  );
}
