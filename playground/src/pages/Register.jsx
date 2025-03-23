import React, { useEffect, useState } from "react";
import InputField from "../components/InputField.jsx";
import "../css/AuthForm.css";

const fields = {
  name: "",
  username: "",
  email: "",
  password: "",
  passwordC: "",
};

let firstRender = true;

function Register() {
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState(fields);

  useEffect(() => {
    // console.log(form);
    validate();
  }, [form]);

  useEffect(() => {
    setErrors((prev) => ({
      ...prev,
      name: "",
    }));
  }, [0]);

  const onChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;

    // firstRender = true;
    // setForm({
    //   ...form,
    //   [name]: value,
    // });

    setErrors((prev) => ({
      ...prev,
      name: "",
    }));

    setForm((prev) => ({
      ...prev,
      [name]: value ?? "",
    }));
  };

  const submit = () => {
    validate();

    const hasErrors = !Object.values(errors).filter((e) => e !== "").length;

    console.log(errors);
    console.log(!hasErrors);

    if (hasErrors && !firstRender) {
      alert(JSON.stringify(form));
    }
    firstRender = false;
  };

  const validate = () => {
    if (!form.name) {
      setErrors((prev) => ({
        ...prev,
        name: "Name is required",
      }));
    }
  };
  return (
    <div className="div-form flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action=""
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <InputField
          label="Name"
          name="name"
          onChange={onChange}
          errors={errors}
        />
        <InputField label="Username" name={`username`} onChange={onChange} />
        <InputField
          label="Email Address"
          type="email"
          name={`email`}
          onChange={onChange}
        />
        <InputField
          label="Password"
          type="password"
          name={`password`}
          onChange={onChange}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name={`passwordC`}
          onChange={onChange}
        />

        <button
          type="button"
          onClick={submit}
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
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
