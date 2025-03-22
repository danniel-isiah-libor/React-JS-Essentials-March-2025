import React, {useState} from 'react'
import StateHook from '../hooks/StateHook.jsx'

function Hooks() {
    const [count,setCount] = useState(0)

    const onClick = () => {
        setCount(count + 1)
    }

    const onReset = () => {
        setCount(0)
    }

    const actions = { 
        onClick: onClick, 
        onReset: onReset 
    }

  return (
    <>
        <div>Hooks</div>

        <StateHook count={count} actions={actions}/>
    </>
  )
}

export default Hooks