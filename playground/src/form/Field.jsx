import React from 'react'


function Field(props) {
  const cars = {
    brand: 'Ford',
    mode: 'Mustang',
    year: 1964
  }
  console.log(cars?.brand ?? 'Brand not found');
  
  return (
    <div>
        <label className ="text-color">{props.label ?? 'fallback'}: </label>
        <input type={props.type ?? 'text'}/>

        <br/>
        <br/>
    </div>
  )
}

export default Field
