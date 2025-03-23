import React, { useContext } from 'react'
import {RecordContext} from './UsersTable.jsx'
function TableRows(props) {
const {users} = useContext(RecordContext)
  return (
    <>
        {
            users.map((record, index) => {
                return (
                    <tr key={index}>
                        {
                            Object.keys(record).map((key, index) => {
                                return (
                                    <td key={index}>
                                        {record[key]}
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
            })
        }
    </>
  )
}

export default TableRows