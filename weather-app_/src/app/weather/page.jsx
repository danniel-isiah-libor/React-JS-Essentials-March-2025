import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Title, Text, Button } from "@shadcn/ui"; // ShadCN components

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "YOUR_API_KEY"; // Get an API key from OpenWeatherMap or any other weather API provider

  // Fetch weather data from the API
  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=4e08b992e608c56b4ad1324b871bec82&q=Makati`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <div className="weather-app">
      <Card>
        <Title>Weather App</Title>
        <div className="city-search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="input"
          />
          <Button onClick={fetchWeatherData}>Search</Button>
        </div>

        {loading && <Text>Loading...</Text>}

        {error && <Text color="red">{error}</Text>}

        {weatherData && (
          <div className="weather-details">
            <Text>
              <strong>{weatherData.name}</strong>, {weatherData.sys.country}
            </Text>
            <Text>{weatherData.weather[0].description}</Text>
            <Text>
              Temperature: {weatherData.main.temp}°C | Humidity:{" "}
              {weatherData.main.humidity}%
            </Text>
            <Text>Wind Speed: {weatherData.wind.speed} m/s</Text>
          </div>
        )}
      </Card>
    </div>
  );
};

export default WeatherApp;
