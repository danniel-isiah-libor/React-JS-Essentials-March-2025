import React from "react";
import InputField from "../components/InputField.jsx";
import "../css/AuthForm.css";

function Login() {
  const submit = () => {
    alert("test");
  };
  return (
    <div className="div-form">
      <form action="">
        <h3>Login</h3>
        <InputField label="Username" name={`username`} />
        <InputField label="Password" type="password" name={`password`} />
        <button type="submit" onClick={submit}>
          Submit
        </button>

        <p>
          Don't Have an Account? <a href="http://localhost:5173/register">Register Here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
