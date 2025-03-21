import React from 'react'


function InputField(props) {
  return (
    <div className="flex space-x-3 justify-center items-center">
      <label>{props.label}</label>
      <input type={props.type} className="border-2 border-zinc-400 rounded-md p-1" />
    </div>
  );
}

export default InputField