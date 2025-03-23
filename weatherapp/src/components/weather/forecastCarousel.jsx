import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ForecastCard } from "./forecastCard"

export default function ForecastCarousel(props) {

  const {forecast} = props
  return (
    <Carousel className="w-[500px] self-center">
      <CarouselContent>
        {forecast.map((item, index) => {
            

          return (
            <CarouselItem key={index}>
              <div className="flex justify-center">
              <ForecastCard weather={item} />
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
