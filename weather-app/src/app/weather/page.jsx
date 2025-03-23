'use client'

import React, {useState, useEffect} from "react";
import axios from 'axios'
import SearchBar from '@/components/weather/SearchBar'
import WeatherCard from '@/components/weather/WeatherCard'
import WeatherForecast from "@/components/weather/WeatherForecast";
import {format} from 'date-fns'

function page() {
  const [search, setSearch] = useState('')
  const [currentWeather, setCurrentWeather] = useState({})
  const [forecast, setForecast] = useState({})

  useEffect(() => {
    if (search) {
      // searching...
    }
  }, [search])

  const onSearch = () => {
    fetchWeather()
    fetchForecast()
  }

  const fetchWeather = async () => {
    const http = axios.create({
      baseURL: 'http://localhost:3000/api'
    })

    const res = await http.get('/weather', {
      params: {
        q: search,
        units: 'metric'
      }
    })
    .then((response) => response.data)
    .catch(() => null)

    if (res) {
      setCurrentWeather(res)
    }
  }

  const fetchForecast = async () => {
    const http = axios.create({
      baseURL: 'http://localhost:3000/api'
    })

    const res = await http.get('/forecast', {
      params: {
        q: search,
        units: 'metric'
      }
    })
    .then((response) => response.data)
    .catch(() => null)

    if (res) {
      const forecast = res.list.reduce((array, item) => {
        const date = format(new Date(item.dt * 1000), 'yyyy-MM-dd')
        
        if (!array[date]) {
          array[date] = []
        }

        array[date].push(item)

        return array
      }, {})

      setForecast(forecast)
    }
  }

  const onChange = (value) => {
    setSearch(value)
  }

  const hasCurrentWeather = !!Object.keys(currentWeather).length
  const hasForecast = !!Object.keys(forecast).length

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
