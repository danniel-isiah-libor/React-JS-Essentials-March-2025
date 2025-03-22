import React, {useState, useEffect} from 'react'
import StateHook from "../Hooks/StateHooks.jsx";

function Hooks() {
    const [count,setCount] = useState(0)

    useEffect(() => {},[count])

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
        <br/>

        {/* <strong>{number}</strong>
        <button onClick={onSet} */}
    </>
  )
}

export default Hooks