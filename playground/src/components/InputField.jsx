import React from "react";

function InputField({label, type, name}) {
  label = label ?? "Label";
  type = type ?? "text";
  return (
    <>
      <label htmlFor={name}>{label}</label><br />
      <input type={type} name={name} id={name}/>
      
      <br />
    </>
  );
}

export default InputField;
