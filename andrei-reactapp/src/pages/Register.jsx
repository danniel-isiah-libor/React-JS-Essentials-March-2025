import React, { useState, useEffect } from "react";
import InputField from "../form/InputField.jsx";

const fields = {
  name: "",
  username: "",
  email: "",
  password: "",
};
const errors = {
  name: "",
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [count, setCount] = useState(false);

  useEffect(() => {
    console.log(count);
    console.log(form);

    if (count) {
      validate();
    }
  }, [form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCount(true);

    setErrors((prev) => ({
      ...prev,
      name: "",
    }));

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    if (!form.name) {
      setErrors((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    }
  };

  const submit = () => {
    validate()
    const hasErrors = !Object.values(errors).filter((e) => e !== "").length
    if (hasErrors) {
          alert(JSON.stringify(form));
    }

  };

  return (
    <div className="bg-white text-black rounded-md p-10 w-1/2 mx-auto ">
      <h1 className="text-6xl font-bold mb-10">Register Form</h1>
      <div className="flex justify-between my-3">
        <InputField
          label="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          errors={errors}
        />
        <InputField
          label="Username"
          type="text"
          name="username"
          value={form.username}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-between my-3">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />
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
