import React from 'react'
import Field from '../form/Field'

export default function Card({itemsToDisplay}) {
  return (
    <li >
        {
            itemsToDisplay.map(({title,text})=><Field label={title} text={text} isReadOnly={true}/>)
        }
    </li>
  )
}
