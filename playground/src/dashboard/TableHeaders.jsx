import React,{useContext} from 'react'
import { RecordContext } from './UsersTable'

function TableHeaders(props) {

    const {headers} = useContext(RecordContext)

  return (
    <thead>
        <tr>
            {
                headers.map((header, index) => {
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