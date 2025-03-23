import React from 'react'
import TableHeaders from './TableHeaders.jsx'
import TableRows from './TableRows.jsx'



function Table() {
  return (
    <>
        <table>
            <TableHeaders />

            <tbody>
                <TableRows />
            </tbody>
        </table>
    </>
  )
}

export default Table