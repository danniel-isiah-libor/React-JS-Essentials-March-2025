import React from 'react'

function Field(props) {
// function Field() {label,type
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type}/>
      {/* <label>{label ?? 'Label'}</label>
      <input type={type ?? 'text'} /> */}
      </div>
  )
}

export default Field