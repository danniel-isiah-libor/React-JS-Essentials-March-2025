import React from 'react'

export default function TableBody({ data }) {
    return (
        <tbody className="divide-y divide-gray-200">
            {data.length > 0 ? (
                data.map((user) => (
                    <tr key={user.id} className="*:text-gray-900 *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">{user.id}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{user.name}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{user.email}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{user.email}</td>
                    </tr>
                ))
            ) :
                (
                    <tr className="*:text-gray-900 *:first:font-medium">
                        <td colSpan={4} className="px-3 py-2 whitespace-nowrap">No Data Found</td>
                    </tr>
                )}
        </tbody>
    )
}
