import React from "react";

export default function Field({label,type}) {
  return (
    <div>
      <label>{label}:</label>
      <input type={type} />
    </div>
  );
}
