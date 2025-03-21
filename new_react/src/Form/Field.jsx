import React from "react";

function Field({ label = "label", type = "text" }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}

export default Field;
