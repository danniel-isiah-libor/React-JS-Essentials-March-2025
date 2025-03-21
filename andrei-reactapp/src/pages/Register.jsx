import React from "react";
import InputField from "../form/InputField.jsx";

function Register() {
  const submit = () => {
    alert("Registered");
  };
  return (
    <div className="bg-white text-black rounded-md p-10 w-1/2 mx-auto ">
      <h1 className="text-6xl font-bold mb-10">Register Form</h1>
      <div className="flex justify-between my-3">
        <InputField label="Name" type="text" />
        <InputField label="Username" type="text" />
      </div>
      <div className="flex justify-between my-3">
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
      </div>

      <button
        onClick={submit}
        className="p-2 bg-zinc-800 rounded-md text-white px-4 w-full"
      >
        Register
      </button>

      <a href="/login">Login Now</a>
    </div>
  );
}

export default Register;
