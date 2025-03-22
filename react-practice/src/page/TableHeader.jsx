import React from 'react'

export default function TableHeader({header}) {
  return (
    <thead>
        {
            header.map((data,index)=><th key={index}>{data}</th>)
        }
    </thead>
  )
}
