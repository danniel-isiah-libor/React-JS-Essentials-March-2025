import React from 'react'

function TableHeaders(RecordContext) {
  return (
    <thead>
        {
            RecordContext.headers.map((header, index) => {
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