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

function Register() {
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [form, setForm] = useState(fields)
  const [errors, setErrors] = useState(fields)

  useEffect(() => {
    console.log(form);

    validate()
  }, [form])

  const onChange = (e) => {
    const {name, value} = e.target

    // setForm({
    //   ...form,
    //   [name]: value ?? ""
    // })
    setForm((prev) => ({
      ...prev,
      [name]: value ?? ""
    }))
  }

  const submit = () => {
    alert(JSON.stringify(form))
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

      <Field label="Username" onChange={onChange} name="username"/>

      <br />
      <br />

      <Field label="Email" type="email" onChange={onChange} name="email"/>

      <br />
      <br />

      <Field label="Password" type="password" onChange={onChange} name="password"/>

      <br />
      <br />

      <Field label="Confirm Password" type="password" onChange={onChange} name="confirmPassword"/>

      <br />
      <br />

      <Button clickEvent={submit} label="Register"/>

      <a href="/login">Login Here</a>
    </div>
  );
}

export default Register;
