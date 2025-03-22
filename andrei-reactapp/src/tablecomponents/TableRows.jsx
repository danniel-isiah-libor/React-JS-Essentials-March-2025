import React from 'react'

function TableRows(props) {
  return (
    <>
      {props.rows.map((row, index) => {
        return (
          <tr id="tablerow">
            <td id="data">{row.id}</td>
            <td id="data">{row.name}</td>
            <td id="data">{row.username}</td>
            <td id="data">{row.email}</td>
          </tr>
        );
      })}
    </>
  );
}

export default TableRows