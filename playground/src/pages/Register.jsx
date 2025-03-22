import {useState, useEffect} from "react";
import Field from "../form/Field.jsx"
import Button from "../form/Button.jsx"

const fields = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
}
let firstRender = true;
function Register() {
  
  const [form, setForm] = useState(fields)
  const [errors, setErrors] = useState(fields)
  const [validated, setValidated] = useState(false)
  useEffect(() => {
    console.log(form);

    if(!firstRender){
      validate()
    }
  }, [form])

  const onChange = (e) => {
    const {name, value} = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value ?? ""
    }))
  }

  const submit = () => {
    validate();
  
      
    console.log(Object.values(errors).filter((s)=>s !== "").length)
    const hasErrors = !Object.values(errors).filter((s)=>s !== "").length
    
    if(hasErrors==0){
      alert(JSON.stringify(form))
    }

    

  }

  const validate = () => {
    if (!form.name) {
      setErrors((prev) => ({
        ...prev,
        name: "Name is required"
      }))
    }
  }

  return (
    <div>
      <Field label="Name" onChange={onChange} name="name" errors={errors}/>

      <br />
      <br />

      <Field label="Username" onChange={onChange} name="username"  errors={errors}/>

      <br />
      <br />

      <Field label="Email" type="email" onChange={onChange} name="email"  errors={errors}/>

      <br />
      <br />

      <Field label="Password" type="password" onChange={onChange} name="password"  errors={errors}/>

      <br />
      <br />

      <Field label="Confirm Password" type="password" onChange={onChange} name="confirmPassword"  errors={errors}/>

      <br />
      <br />

      <Button clickEvent={submit} label="Register"/>

      <a href="/login">Login Here</a>
    </div>
  );
}

export default Register;
