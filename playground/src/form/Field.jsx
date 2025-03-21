import React from 'react'

function Field({
    label,
    type
}) {
  return (
    <div>
        <label>{label ?? 'Label'}:</label>
        <input type={type ?? 'text'} />
    </div>
  )
}

export default Field