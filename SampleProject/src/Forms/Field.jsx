import React from 'react'

export default function Field(props ) {
  return (
    <div>
    <label>{props.label}</label>
    <input type={props.type}/>      
    </div>
  )
}
