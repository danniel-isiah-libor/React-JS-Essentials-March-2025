import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ForecastCard from "./ForecastCard";

export default function ForecastCarousel({weatherForecast}) {

  if(weatherForecast.length!=0){
    return (

  
      Object.keys(weatherForecast).map((forecast,index)=>(   <Carousel className=" w-full max-w-xs self-center"
        key={index}
      >
        <CarouselContent
      
        >
          
          {
              weatherForecast[forecast].map((data,ind)=>
                
                <CarouselItem
                  key={ind}
                >
                  <h1>{forecast}</h1>
                  <ForecastCard 
                    description={data.weather[0].description}
                    image={data.weather[0].icon}
                    time={data.dt}
                    temp={data.main.temp}
                  />
              </CarouselItem>
              )
            }
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>))
   
    );
  }
  return (<label className="text-center">No records found</label>)
 
}
