"use client";
import { Card } from "@/components/ui/card";
import { Search } from "@/components/ui/search";
import { ForecastCard } from "@/components/weather/forecastCard";
import ForecastCarousel from "@/components/weather/forecastCarousel";
import React, { useState } from "react";
import { format } from "date-fns";
import { Provider, useDispatch } from "react-redux";
import { add } from "@/redux/actions";
export default function page() {
  const [forecast, setForecast] = useState({});
  const [currentWeather, setCurrentWeather] = useState({ location: "" });
  const dispatch = useDispatch();
  const onSearch = async (text) => {
    const toSearch = text.current.value;
    const weather = await (
      await fetch(`api/weather?q=${toSearch}&units=metric`)
    ).json();

    const forecast = await (
      await fetch(`api/forecast?q=${toSearch}&units=metric`)
    ).json();

    if (weather) {
      let currentData = {
        location: weather.name,
        date: format(weather.dt * 1000, "yyyy-MM-dd"),
        icon: weather.weather[0].icon,
        status: weather.weather[0].description,
        temperature: weather.main.temp,
      };
      setCurrentWeather(currentData);
      //dispatch(add(currentData));
    }
    let tempForecast = {};
    if (forecast) {
      forecast.list.map((item, index) => {
        let date = format(item.dt * 1000, "yyyy-MM-dd");

        if (!tempForecast[date]) {
          tempForecast[date] = [];
        }
        tempForecast[date].push(item);
      });
    }

    setForecast(tempForecast);
  };
  const hasCurrentWeather = !!Object.values(currentWeather).filter(
    (a) => a != 0
  ).length;
  const hasForecast = !!Object.values(forecast).length;
  return (
    <div className="flex flex-col space-y-5 p-5 w-full">
      <div className="flex justify-center ">
        <h1 className="font-medium text-lg">Weather App</h1>
      </div>
      <div className="flex justify-center">
        <Search btnName="Search" onSearch={onSearch} />
      </div>

      <div className="flex justify-center space-y-5">
        {hasCurrentWeather && <ForecastCard weather={currentWeather} />}
      </div>
      <div className="flex flex-col space-y-5 w-full px-10">
        {hasForecast &&
          Object.keys(forecast).map((key, index) => {
            let data = forecast[key].map((item) => {
              console.log("ITEMMSS", item);
              return {
                location: null,
                date: format(item.dt * 1000, "yyyy-MM-dd"),
                icon: item.weather[0].icon,
                status: item.weather[0].description,
                temperature: item.main.temp,
              };
            });
            return <div key={index} className="self-center"><ForecastCarousel forecastKey={index} forecast={data} /></div>;
          })}
      </div>
      {!(hasCurrentWeather && hasForecast) && <p>No record found</p>}
    </div>
  );
}
