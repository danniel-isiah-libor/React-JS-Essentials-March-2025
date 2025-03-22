import React from 'react'

export default function Row({items}) {


  return (
    <tr className='row'>
        {
            Object.keys(items)?.map((data,index)=><td key={index}>{items[data]}</td>)
        }
    </tr>
  )
}
