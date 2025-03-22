import React, {useState,  useEffect, useRef} from 'react'
import StateHook from '../hooks/StateHook.jsx'

function Hooks() {
    const [count,setCount] = useState(0)
    const [number, setNumber] = useState(0)
    const age = useRef(0)
    const inputField = useRef()

    useEffect(() => {
        console.log(age);  
    })

    useEffect(() => {
        console.log('useEffect called');
    }, [count])

    const onClick = () => {
        // setCount(count + 1)
        age.current = age.current + 1

        console.log(age);
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

    const onFocus = () => {
        inputField.current.focus()
    }

  return (
    <>
        <div>Hooks</div>

        <input type="text" ref={inputField}/>
        <button onClick={onFocus}>Focus</button>

        <br />

        <h2>{age.current}</h2>

        <br />

        <StateHook count={count} actions={actions}/>

        <br />

        <strong>{number}</strong>
        <button onClick={onSetNumber}>Set Number</button>
    </>
  )
}

export default Hooks