import React from "react";

export default function Field({label,type,isReadOnly = false,text = null}) {
  return (
    <div>
      <label className="mr-2 font-bold">{label ?? 'Label'}:</label>
      {!isReadOnly  ? <input type={type ?? 'text'} value={text ?? ""} />:<label>{text}</label>}
    </div>
  );
}
