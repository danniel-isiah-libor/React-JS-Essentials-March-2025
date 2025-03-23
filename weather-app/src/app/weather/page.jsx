"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Input } from "@/components/ui/input"
import Middle from './Middle';
import Bottom from './Bottom';

function page() {
    const [city, setCity] = useState("")
    const [currentWeather, setCurrentWeather] = useState(null)
    const [loading, setLoading] = useState(false)

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const fetchWeather = async (e) => {
        if (e && e.preventDefault) e.preventDefault(); // Ensure e is valid before calling preventDefault

        if (!city.trim()) return; // Prevent empty search

        setLoading(true);

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            const response = await axios.get(url);
            setCurrentWeather(response.data);
        } catch (error) {
          if(error.response && error.response.status === 404){
            setCurrentWeather(null);
          }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            style={{
                minHeight: '100vh',
                backgroundImage: "url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
            className="bg-cover h-screen flex flex-col justify-between"
        >
            {/* Input Field */}
            <div className="mx-auto max-w-xl w-full items-center space-x-2 mt-10">
                <form action={fetchWeather}>
                    <Input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={`border-gray-400 `}
                        type="text"
                        placeholder="Enter City" />
                </form>
            </div>

            <Middle data={currentWeather} />

            <Bottom data={currentWeather} />

        </section>
    )
}

export default page