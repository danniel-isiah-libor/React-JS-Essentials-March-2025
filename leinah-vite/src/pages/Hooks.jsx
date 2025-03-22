import { useState, useEffect, useRef } from 'react'
import Container from '../Components/Basic/Container'
import StateHook from '../hooks/StateHook'

export default function Hooks() {

    const [count, setCount] = useState(0)
    const [number, seNumber] = useState(0)

    // useRef to keep track of the previous count value
    const prevCountRef = useRef()

    // useRef to reference an input field
    const inputRef = useRef()

    useEffect(() => {
        console.log('useEffect with no dependency passed executed'); /* executed on every render */
    })

    useEffect(() => {
        console.log('useEffect with empty array executed'); /* executed on first render */
    }, [])

    useEffect(() => {
        console.log('useEffect with prop value executed'); /* executed on first render and any time dependency value changes */
    }, [count])

    const onClick = () => {
        setCount(count + 1)
    }

    const onReset = () => {
        setCount(0)
    }

    const focusInput = () => {
        inputRef.current.focus() // Focus the input field
    }

    const actions = {
        onClick: onClick,
        onReset: onReset
    }

    return (
        <Container>
            <p className='text-4xl font-semibold'>Use State</p>
            <StateHook count={count} actions={actions} />

            {/* Display previous count */}
            <p className='text-2xl'>Previous Count: {prevCountRef.current}</p>

            {/* Input field with useRef */}
            <input ref={inputRef} type="text" placeholder="Type here..." className="border p-2 mt-4 block" />

            {/* Button to focus the input field */}
            <button className='btn p-3 bg-blue-400 rounded-lg text-white cursor-pointer mt-2' onClick={focusInput}>
                Focus Input
            </button>
        </Container >
    )
}
