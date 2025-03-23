import React, {useState, useEffect} from 'react'
import StateHook from '../form/StateHook.jsx'

function Hooks() {
    
    const [count,setCount] = useState(0) 

    useEffect(() => {
        console.log('useEffect called');
    })
    
    
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