import React from 'react'

function Card(props) {
    return (
        <div>
        {/* <label>{props.label} : </label> */}
        <label>{label ?? 'Label'} : </label>
        <input type={type ?? 'text'} />
        </div>
    )
}  

export default Card