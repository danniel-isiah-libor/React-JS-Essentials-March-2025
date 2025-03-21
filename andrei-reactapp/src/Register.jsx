import React from 'react'
import InputField from './form/InputField.jsx'

function Register() {
  return (
    <div className="bg-white rounded-md p-10 w-1/2 mx-auto">
      <div className="flex justify-between">
        <InputField label="Name" type="text" />
        <InputField label="Username" type="text" />
      </div>
      <div className="flex justify-between">
        <InputField label="Email" type="email" />
        <InputField label="Password" type="pass" />
      </div>

      <button className="p-2 bg-zinc-800 rounded-md text-white px-4">
        Register
      </button>
    </div>
  );
}

export default Register