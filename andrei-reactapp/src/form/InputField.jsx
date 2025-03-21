import React from 'react'


function InputField({
  label,
  type }) {
  return (
    <div className="flex space-x-3 justify-center items-center">
      <label>{label ?? 'Label'}</label>
      <input type={type ?? 'text'} className="border-2 border-zinc-400 rounded-md p-1" />
    </div>
  );
}

export default InputField