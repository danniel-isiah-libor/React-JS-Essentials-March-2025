"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { act, useEffect, useReducer, useState } from "react";
import ForecastCard from "./(weathercomponents)/ForecastCard";
import WeatherSearchBar from "./(weathercomponents)/WeatherSearchBar";
import { Button } from "@/components/ui/button";
import ForecastCarousel from "./(weathercomponents)/ForecastCarousel";
//import useWeatherHook from './(api)/weatherHook.js'
import {format} from 'date-fns'


import { Provider,useDispatch } from "react-redux";
import store from "@/redux/store";
import { ADD, add } from "@/redux/action";

export default function Page() {
  const [forecast, setForecast] = React.useState({});

  const [currentWeather, setCurrentWeather] = useState({})
  const dispatch = useDispatch();

  
  

  const onSearch = async (e) => {
    //api call
    
    

    //http://localhost:3000/api/weather?q=makati
    const currentForecast = await (await fetch(`api/weather?q=${e.current}`)).json();

    
    const weatherForecast = await (await fetch(`api/forecast?q=${e.current}&units=metric`)).json();
    
    let tempObj = {}
   weatherForecast.list.map((s,index)=>{
      const date = format(new Date(s.dt * 1000),'yyyy-MM-dd');
      if(!tempObj[date]){
        tempObj[date]=[]
      }
      
      tempObj[date].push({
        ...s,
        dt:format(s.dt*1000,"yyyy-MM-dd")
      })
      
    })


    dispatch(add(currentForecast));
    setForecast(tempObj);
    
    console.log(tempObj)
    setCurrentWeather(currentForecast?{
      locationName:currentForecast.name,
      image:currentForecast.weather[0].icon,
      date:currentForecast.weather[0].main
    }:{})
    
  };


  return (
    <>
      <div className="flex flex-col ">
      <h1 className="text-2xl">Weather App</h1>
      <WeatherSearchBar onSearch={onSearch} 
      
      />
      {
        Object.keys(currentWeather).length !=0 && <ForecastCard {
          ...currentWeather
        }
        
        />
        }
        
      <ForecastCarousel weatherForecast={forecast} 
        
      />
    </div>
    </>
  );
}
