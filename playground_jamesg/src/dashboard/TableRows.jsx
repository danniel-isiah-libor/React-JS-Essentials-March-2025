import React, {useContext} from 'react'
import { RecordContext } from './UsersTable.jsx'

function TableRows() {
    const { records } = useContext(RecordContext)

  return (
    <>
        {
            records.map((record, index) => {
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