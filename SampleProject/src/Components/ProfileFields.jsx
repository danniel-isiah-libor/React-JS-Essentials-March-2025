import React from 'react'

export default function ProfileFields({label, value}) {
  return (
    <div className="grid grid-cols-4 space-x-2">
        <label className=' self-center font-medium text-sm'>{label ?? "label"} :</label>
        <p className='col-span-3 self-center'>{value ?? "value"}</p>
    </div>
  )
}
