import React, { useState } from 'react'

export default function Search({search}) {
    const [searchText, setSearchText] = useState("")


  return (
    <div className='flex flex-row space-x-1'>
      <input id="searchText" type="text" className='px-3 py-1 border rounded outline-0' onChange={(e) => {
        setSearchText(e.target.value.toLowerCase())
      }}/>
      <button className='px-2 py-1 border rounded hover:bg-gray-300' onClick={(e) => search(searchText)}>Search</button>
    </div>
  )
}
