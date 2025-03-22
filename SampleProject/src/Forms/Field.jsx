import React from "react";

export default function Field({ label, type, onChange, name }) {
  return (
    <div className="grid grid-cols-3">
      <label className="self-center">{label ?? "Label"}</label>
      <input
        type={type ?? "text"}
        name={name}
        className="col-span-2 border px-3 py-1 rounded outline-0 "
        onChange={(e) => {
          onChange(e);
        }}
      />
    </div>
  );
}
