import {useState} from "react";
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

  const onChange = (e) => {
    const {name, value} = e.target

    console.log(name, value);

    setForm({
      ...form,
      [name]: value ?? ""
    })
  }

  const submit = () => {
    alert(JSON.stringify(form))
  }

  return (
    <div>
      <Field label="Name" onChange={onChange} name="name"/>

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
