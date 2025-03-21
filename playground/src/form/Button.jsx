import React from 'react'

function Button(props) {
  return (
    <button onClick={props.click}>{props.text}</button> 
  )
}

export default Button 