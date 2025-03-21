import React from 'react'
import Fields from './Forms/Field'
export default function Register() {
  return (
    <div >
        <Fields type="text" label="Name :"/>
        <br/>
        <Fields type="text" label="Username :"/>
        <br/>
        <Fields type="email" label="Email :"/>
        <br/>
        <Fields type="password" label="Password :"/>
        <br/>
        <Fields type="password" label="Confirm Password :"/>
        <br/>
        <button>Register</button>
    </div>
  )
}
