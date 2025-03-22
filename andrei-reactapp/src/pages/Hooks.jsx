import React, { useState, useEffect, useActionState } from 'react'
import StateHook from '../hooks/StateHook.jsx'

function Hooks() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  useEffect(() => {
    console.log('useEffect Called');
    
  },[count])

  const onClick = () => {
    setCount(count + 1)
  }
  const actions = {
    onClick: onClick,
  }


  return (
    <>
      <div>Hooks</div>
      <StateHook count={count} actions={actions} />
      <strong>{number}</strong>
      {/* <button type="button" onClick={setNumber(1)}>SetNumber</button> */}

    </>
  );
}

export default Hooks