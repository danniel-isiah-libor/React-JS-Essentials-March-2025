import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WeatherCard from '@/components/weather/WeatherCard';

function WeatherForecast(props) {
  return (
    <Carousel className="w-full max-w-xs mt-10">
      <CarouselContent>
        {Object.keys(props.forecast).map((date) => {
          return (
            props.forecast[date].map((weather, index) => {
              weather.name = date

              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <WeatherCard weather={weather}/>
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