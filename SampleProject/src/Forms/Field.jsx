import React from 'react'

export default function Input({label,...props }) {
  return (
    <div>
<label>{label}</label>
<input {...props}/>      
    </div>
  )
}
