import React from "react";

function InputField({ label, type, name, onChange, errors }) {
  label = label ?? "";
  type = type ?? "text";
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-0.5"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          onChange={onChange}
          className="px-4 py-2 border border-gray-300 w-full rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none w-100 m-0  "
        />
        {errors && errors[name] && (
          <p className="text-red-500 m-0">{errors[name]}</p>
        )}
      </div>
    </>
  );
}

export default InputField;
