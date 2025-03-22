import React from 'react'

function SearchBar() {
return (
    <>
            <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-2">
                            <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                    </div>

                    <div className="w-full md:w-1/2 p-2">
                            <button 
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                    Search
                            </button>
                    </div>
            </div>
    </>
)
}

export default SearchBar  