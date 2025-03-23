import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function Bottom({ data }) {
    return (
        <div className="flex flex-col justify-end">
            <Card className={`mx-auto max-w-screen-xl h-full w-full bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10 border-0 rounded-xl`}>
                <CardContent>
                    <div className="grid grid-cols-12 gap-3 text-white">
                        {data && data.main ? (<div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="text-center">
                                <p className="text-[70px] font-semibold">{(data.main.feels_like - 273.15).toFixed(2)}&#176;C</p>
                                <p className="text-[20px]">Feels Like</p>
                            </div>
                        </div>) : ""}
                        {data && data.main ? (<div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="text-center">
                                <p className="text-[70px] font-semibold">{data.main.humidity}% </p>
                                <p className="text-[20px]">Humidity</p>
                            </div>
                        </div>) : ""}

                        {data && data.wind ? (<div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="text-center">
                                <p className="text-[70px] font-semibold">{(data.wind.speed * 3.6).toFixed(1)} Km/H</p>
                                <p className="text-[20px]">Wind Speed</p>
                            </div>
                        </div>) : ""}
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
