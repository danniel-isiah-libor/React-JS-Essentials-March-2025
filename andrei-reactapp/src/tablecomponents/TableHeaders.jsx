import React from 'react'

function TableHeaders(props) {
  return (
    <thead>
      {
          props.theads.map((thead, index) => {
            return
            <tr>
              <th>{thead}</th>
            </tr>;
            })}
    </thead>
  )
}

export default TableHeaders