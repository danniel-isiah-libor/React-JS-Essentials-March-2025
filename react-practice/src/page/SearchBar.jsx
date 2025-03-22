import React from 'react'

export default function SearchBar({onClick}) {

  return (
    <div>
        <input id="inputBar"/>
        <button
        onClick={()=>{
            onClick(document.getElementById('inputBar').value)
        }}
        >Search</button>
    </div>
  )
}
