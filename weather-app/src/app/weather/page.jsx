'use client'

import React, {useState, useEffect} from "react";
import SearchBar from '@/components/weather/SearchBar'
import WeatherCard from '@/components/weather/WeatherCard'
import WeatherForecast from "@/components/weather/WeatherForecast";

function page() {
  const [search, setSearch] = useState('')
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    if (search) {
      // searching...
    }
  }, [search])

  const onSearch = () => {
    // searching...
  }

  const onChange = (value) => {
    setSearch(value)
  }

  const hasCurrentWeather = !!Object.keys(currentWeather).length
  const hasForecast = !!forecast.length

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1>Weather App</h1>

        <div className="mb-10">
          <SearchBar onSearch={onSearch} onChange={onChange}/>
        </div>

        {
          hasCurrentWeather && <WeatherCard weather={currentWeather}/>
        }
        
        {
          hasForecast && <WeatherForecast forecast={forecast}/>
        }

        {
          !(hasCurrentWeather && hasForecast) 
          ? <p>No record found.</p> : ""
        }
      </div>
    </>
  );
}

export default page;
