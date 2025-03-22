import React from "react";

export default function Field(props) {
  const { label, type, onChange, name, error, className } = props
  return (
    <div className={className}>
      <label className="self-center">{label ?? "Label"}</label>
      <input
        type={type ?? "text"}
        name={name}
        className="col-span-2 border px-3 py-1 rounded outline-0 "
        onChange={(e) => {
          onChange(e);
        }}
      />
      {error && (error[name] && <p className="text-red-500">{error[name]}</p>)}
    </div>
  );
}
