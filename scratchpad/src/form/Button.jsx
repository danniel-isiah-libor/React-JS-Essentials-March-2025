import React from 'react'

function Button(props) {
  return (
    <button onCanPlay={props.clickEvent}>
        {props.label}
    </button>
    // <div>Button</div>
  )
}

export default Button