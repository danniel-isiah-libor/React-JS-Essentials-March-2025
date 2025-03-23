import React from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
import { useSelector } from "react-redux";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ForecastCard({
  
  locationName,
  image,
  description,
  time,
  temp
}) {

  const weather = useSelector(state=>state.weather)


  console.log(weather)
  return (
    <Card className={"p-2 flex-col items-center "}>
        <h3 className="text-2xl">{description}</h3>
       

       <img src={`https://openweathermap.org/img/wn/${image}@2x.png`} style={{backgroundColor:"gray"}}/>
        <h2 className=" text-xl">{locationName}</h2>
        <h2 className=" text-xl">{time}</h2>
        <h2 className=" text-xl">{temp}</h2>
      </Card>
    
  );
}
