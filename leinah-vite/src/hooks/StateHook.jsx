export default function StateHook(props) {
    return (
        <>
            <p className='text-2xl'>Count: {props.count}</p>

            <button className='btn p-3 bg-green-400 rounded-lg text-white cursor-pointer' onClick={props.actions.onClick}>Click me!</button>
            <button className='btn p-3 bg-red-400 rounded-lg text-white cursor-pointer' onClick={props.actions.onReset}>Reset</button>
        </>
    )
}
