"use client"
import { useState, useEffect } from 'react'
import WeatherCard from '@/components/weather/WeatherCard';
import WeatherForecast from '@/components/weather/WeatherForecast';
import SearchBar from '@/components/weather/SearchBar';
import { format } from 'date-fns';
import useWeather from '@/hooks/useWeather';

import { useDispatch } from 'react-redux'
import store from '@/redux/store'
import { add } from '@/redux/actions'

function page() {
    const [search, setSearch] = useState('')
    const [currentWeather, setCurrentWeather] = useState({})
    const [forecast, setForecast] = useState([])
    const { fetchWeather, fetchForecast } = useWeather()
    const dispatch = useDispatch()

    useEffect(() => {
        if (search) {
            onSearch()
        }
    }, [search])

    const onSearch = async () => {
        const resWeather = await fetchWeather(search)
        if (resWeather) {
            // from useState
            setCurrentWeather(resWeather)

            // from redux
            dispatch(add(resWeather))
        }

        const resForecast = await fetchForecast(search)

        if (resForecast) {
            const newForecast = resForecast.list.reduce((array, item) => {
                const date = format(new Date(item.dt * 1000), 'yyyy-MM-dd')

                if (!array[date]) {
                    array[date] = []
                }

                array[date].push(item)

                return array
            }, {})

            setForecast(newForecast)
        }
    }

    const onChange = (value) => {
        setSearch(value)
    }

    const hasCurrentWeather = !!Object.keys(currentWeather).length
    const hasForecast = !!Object.keys(forecast).length


    return (
        <section
            style={{
                minHeight: '100vh',
                backgroundImage: "url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
            className="bg-cover h-screen flex flex-col justify-between"
        >
            {/* Input Field */}
            <div className="mb-10">
                <SearchBar onSearch={onSearch} onChange={onChange} />
            </div>

            {
                hasCurrentWeather && <WeatherCard weather={currentWeather} />
            }

            {
                hasForecast && <WeatherForecast forecast={forecast} />
            }

            {
                !(hasCurrentWeather && hasForecast)
                && ""
            }

        </section>
    )
}

export default page