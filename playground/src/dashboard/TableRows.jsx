import React from 'react'

function TableRows(props) {
  return (
    <>
        {
            props.records.map((record, index) => {
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