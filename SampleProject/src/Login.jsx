import React from 'react'
import Field from './Forms/Field'

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
        <br/>
        <Field type="email" label="Email :"/>
        <br/>
        <Field type="password" label="Password :"/>

    </div>
  )
}
