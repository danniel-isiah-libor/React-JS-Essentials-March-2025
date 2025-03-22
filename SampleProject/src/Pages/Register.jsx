import React, { useEffect, useState } from "react";
import Field from "../Forms/Field";
const fields = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}

let firstRender = true
export default function Register() {
  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    console.log("FORM", firstRender)
    if(!firstRender){
      validate()
    }
    
  },[form])
  useEffect(() => {
    let hasErrors = Object.values(errors).filter(err => err !== "").length !== 0
    if(hasErrors){
      alert(JSON.stringify(errors))
    }
    
  },[validated])
  const onChange = (e) => {
    console.log("EEE", e.target.name)
    const {name, value} = e.target
    firstRender = false
    setForm(prev => {
      return{...prev,
        [name] : value
      }
    })

  }
  console.log(form)
  const submit = async(data) => {
    await validate()

    console.log("ERRORS", errors)
    
    alert(JSON.stringify(data))

  }; 

  const validate = () => {
    if(form.name == ''){
      setErrors(prev => ({
        ...prev,
        name: "Name is required"
      }))
    }else{
      setErrors(prev => ({
        ...prev,
        name: ""
      }))
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <Field label={"Name: "} className="grid grid-cols-3" onChange={onChange} name="name" error={errors}  />
      <br />
      <Field label="Username :" className="grid grid-cols-3" onChange={onChange} name="username" error={errors} />
      <br />
      <Field type="email" label="Email :" className="grid grid-cols-3" onChange={onChange} name="email" error={errors} />
      <br />
      <Field type="password" label="Password :" className="grid grid-cols-3" onChange={onChange} name="password" error={errors} />
      <br />
      <Field type="password" label="Confirm Password :" className="grid grid-cols-3" onChange={onChange} name="confirmPassword" error={errors} />
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
