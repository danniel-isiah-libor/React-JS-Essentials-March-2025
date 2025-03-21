import React from 'react'
import Field from '../Forms/Field'

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
        <div className="flex justify-center space-x-2">
        <button className="px-2 py-1 border rounded bg-blue-400 text-white text-sm">
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
  )
}
