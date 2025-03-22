import React from 'react'

function StateHook(props) {
  return (
    <>
      <div>StateHook</div>
      <h1 className="text-5xl text-green-400">Total Count is {props.count}</h1>
      <button type="button" onClick={props.actions.onClick}>
        Click
      </button>
    </>
  );
}

export default StateHook