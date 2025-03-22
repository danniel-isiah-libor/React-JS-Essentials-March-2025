import React from 'react'

function StateHook(props) {
  return (
    <>
        <h1>{props.count}</h1>
        
        <button onClick={props.actions.onClick}>Click Me</button>
        <button onClick={props.actions.onReset}>Reset</button>
    </>
  )
}

export default StateHook