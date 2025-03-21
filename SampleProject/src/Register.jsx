import React from 'react'
import Field from './Forms/Field'

export default function Register() {
  return (
    <div >
        <Field type="text" label="Name :"/>
        <br/>
        <Field type="text" label="Username :"/>
        <br/>
        <Field type="email" label="Email :"/>
        <br/>
        <Field type="password" label="Password :"/>
        <br/>
        <Field type="password" label="Confirm Password :"/>
        <br/>
        <button>Register</button>
    </div>
  )
}
