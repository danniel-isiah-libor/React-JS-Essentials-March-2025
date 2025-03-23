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
        {props.forecast.map((weather, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <WeatherCard weather={weather}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default WeatherForecast