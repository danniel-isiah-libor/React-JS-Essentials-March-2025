import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import WeatherCard from '@/components/weather/WeatherCard';


function WeatherForecast(props) {
    return (
        <Carousel className="w-full max-w-6xl my-10 mx-auto"
            opts={{
                align: "start",
            }}
          >
            <CarouselContent>
                {Object.keys(props.forecast).map((date) => {
                    return (
                        props.forecast[date].map((weather, index) => {
                            const dateObj = new Date(date);
                            const formattedDate = dateObj.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
                            weather.name = formattedDate
                            return (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <WeatherCard weather={weather} />
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default WeatherForecast