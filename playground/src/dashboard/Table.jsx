import React from 'react'
import TableHeaders from './TableHeaders.jsx'
import TableRows from './TableRows.jsx'

function Table(props) {
  return (
    <>
        <table>
            <TableHeaders headers={props.headers}/>

            <tbody>
                <TableRows records={props.records}/>
            </tbody>
        </table>
    </>
  )
}

export default Table