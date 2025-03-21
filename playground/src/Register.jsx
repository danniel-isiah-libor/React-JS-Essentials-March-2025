import React from "react";
import InputField from "./components/InputField.jsx";
import "./AuthForm.css";

function Register() {
  const submit = () => {
    alert("test");
  };
  return (
    <div className="div-form">
      <form action="">
        <h3>Register</h3>
        <InputField label="Name" name="name" />
        <InputField label="Username" name={`username`} />
        <InputField label="Email Address" type="email" name={`email`} />
        <InputField label="Password" type="password" name={`password`} />
        <InputField
          label="Confirm Password"
          type="password"
          name={`passwordC`}
        />
        <button type="submit" onClick={submit}>
          Submit
        </button>

        <p>
          Already Have an Account?
          <a href="http://localhost:5173/login">Login Here</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
