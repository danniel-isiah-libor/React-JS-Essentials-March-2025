import React from 'react'
import Field from './Forms/Field'

export default function Register() {
    const submit = () => {
        alert("Registered!")
    }
  return (
    <div >
        <h1>Register</h1>
        <Field  label={"Name: "}/>
        <br/>
        <Field  label="Username :"/>
        <br/>
        <Field type="email" label="Email :"/>
        <br/>
        <Field type="password" label="Password :"/>
        <br/>
        <Field type="password" label="Confirm Password :"/>
        <br/>
        <button onClick={submit}>Register</button>
    </div>
  )
}
