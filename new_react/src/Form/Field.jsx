import React from "react";

function Field(props) {
  console.log(props.label);
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} />
    </div>
  );
}

export default Field;
