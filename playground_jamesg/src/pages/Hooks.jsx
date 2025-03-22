import React, {useState,  useEffect} from 'react'
import StateHook from './StateHook.jsx'

function Hooks() {
    const [count,setCount] = useState(0)
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('useEffect called');
    }, [count])

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

    const onSetNumber = () => {
        setNumber(10)
    }

  return (
    <>
        <div>Hooks</div>

        <StateHook count={count} actions={actions}/>

        <br />

        <strong>{number}</strong>
        <button onClick={onSetNumber}>Set Number</button>
    </>
  )
}

export default Hooks