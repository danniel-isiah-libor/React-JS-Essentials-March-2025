import React from 'react'

export default function TableHeader(props) {
    return (
        <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900">
                {
                    Object.keys(props.headers[0]).map((key, index) => {
                        return (
                            <th key={index} className='p-1 capitalize'>
                                {key}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}
