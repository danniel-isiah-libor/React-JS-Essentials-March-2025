import React from 'react'

export default function Container({ children }) {
    return (
        <div className='mx-auto max-w-screen-lg'>
            <div className="items-center bg-white rounded-2xl p-4 sm:p-6 lg:p-8 overflow-x-auto" >
                {children}
            </div>
        </div>
    )
}
