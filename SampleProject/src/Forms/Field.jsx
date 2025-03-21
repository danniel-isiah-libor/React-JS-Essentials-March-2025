import React from 'react'

export default function Field({label, type} ) {
  return (
    <div className='grid grid-cols-3'>
    <label className='self-center'>{label ?? "Label" }</label>
    <input type={type  ?? "text"} className='col-span-2 border px-3 py-1 rounded outline-0 '/>      
    </div>
  )
}
