import React from "react";
import Field from "../Forms/Field";

export default function Login() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="p-5 flex flex-col space-y-1 border w-fit self-center">
        <h1 className="font-medium self-center">Login</h1>
        <br />
        <Field type="email" label="Email :" className="grid grid-cols-3" />
        <br />
        <Field type="password" label="Password :" className="grid grid-cols-3" />
        <div className="flex justify-center space-x-2">
          <button className="px-2 py-1 border rounded bg-blue-400 text-white text-sm">
            Login
          </button>
          <a
            href="/register"
            className="hover:text-blue-500 self-center text-sm border rounded px-2 py-1"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
