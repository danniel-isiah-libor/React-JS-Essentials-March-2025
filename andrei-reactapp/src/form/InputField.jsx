import React from "react";

function InputField({ label, type, onChange, value, name, errors }) {
  return (
    <div className="flex space-x-3 justify-center items-center">
      <label>{label ?? "Label"}</label>
      <input
        type={type ?? "text"}
        className="border-2 border-zinc-400 rounded-md p-1"
        onChange={onChange}
        value={value}
        name={name}
      />
      <br />
      {errors && errors[name] && <p className="text-red-500">{errors[name]}</p>}
    </div>
  );
}

export default InputField;
