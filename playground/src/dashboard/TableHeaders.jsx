import React from 'react'

function TableHeaders(props) {
  return (
    <thead>
        {
            props.headers.map((header, index) => {
                return (
                    <th key={index}>
                        {header.label}
                    </th>
                )
            })
        }
    </thead>
  )
}

export default TableHeaders