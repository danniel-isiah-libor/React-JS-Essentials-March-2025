import React from 'react'
import TableRows from '../Basic/TableRows.jsx';
import TableHeader from '../Basic/TableHeader.jsx';
export default function Table(props) {

return (
        <table className="min-w-full divide-y-2 divide-gray-200">
            <TableHeader headers={props.headers} />
            <tbody>
                <TableRows records={props.records} />
            </tbody>
        </table>
    )
}
