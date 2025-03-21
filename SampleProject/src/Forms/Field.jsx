import React from 'react'

export default function Field({label, type} ) {
  return (
    <div>
    <label>{label ?? "Label" }</label>
    <input type={type  ?? "text"}/>      
    </div>
  )
}
