import React from 'react'

function TableHeaders(props) {
  return (
    <thead>
        <tr>
            {
                props.headers.map((header, index) => {
                    return (
                        <th key={index}>
                            {header.label}
                        </th>
                    )
                })
            }
        </tr>
    </thead>
  )
}

export default TableHeaders