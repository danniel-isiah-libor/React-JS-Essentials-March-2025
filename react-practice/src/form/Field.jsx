import React from "react";

export default function Field({
  label,
  type,
  name,
  isReadOnly = false,
  text = null,
  onChange,
}) {
  return (
    <div>
      <label className="mr-2 font-bold">{label ?? "Label"}:</label>
      {!isReadOnly ? (
        <input
          name={name}
          type={type ?? "text"}
          defaultValue={text ?? ""}
          onChange={(e) => {
            onChange(e.target.value, e.target.name);
          }}
        />
      ) : (
        <label>{text}</label>
      )}
       
    </div>
  );
}
