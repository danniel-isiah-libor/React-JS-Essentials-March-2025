import React from 'react'

function Searchbar(props) { 
  return (
    <> 
    <button onClick={props.click}>{props.text}</button>
    </> 
  )
}

export default Searchbar
