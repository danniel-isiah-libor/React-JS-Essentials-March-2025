import React from 'react'

export default function Middle({ data }) {
    return (
        <div className="grid grid-cols-12 min-w-xl mx-auto">
            <div className="col-span-12 flex flex-col items-center text-white relative">
                <div>
                    <p className="text-[60px] font-semibold">{data && data.name ? (<>{data.name} {data.sys.country}</>) : "Search for a place"}</p>
                </div>
                <div className=" relative">
                    <p className='text-9xl'>{data && data.main ? (<>{(data.main.temp - 273.15).toFixed(2)}&#176;C</>) : ""}</p>
                    <p className=" float-end text-[30px] font-semibold ">
                        {data && data.weather ? data.weather[0]?.main : ""}
                    </p>
                </div>
            </div>
        </div>
    )
}
