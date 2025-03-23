import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody, Text, Button, Input, Label, Spinner } from "shadcn-ui";

const WeatherApp = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const apiKey = "your-api-key"; // Replace with your OpenWeatherMap API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div className="weather-app">
      <Card>
        <CardHeader>
          <Text variant="h3">Weather Application</Text>
        </CardHeader>
        <CardBody>
          <div className="search-container">
            <Label htmlFor="city">Enter City:</Label>
            <Input
              id="city"
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
            />
            <Button onClick={handleSearch} variant="primary" className="search-button">
              Search
            </Button>
          </div>

          {loading ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : error ? (
            <Text color="red">{error}</Text>
          ) : weather ? (
            <div className="weather-details">
              <Text variant="h4">{weather.name}, {weather.sys.country}</Text>
              <Text variant="h5">Temperature: {weather.main.temp}°C</Text>
              <Text variant="body1">Humidity: {weather.main.humidity}%</Text>
              <Text variant="body1">Weather: {weather.weather[0].description}</Text>
            </div>
          ) : (
            <Text>No weather data available.</Text>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherApp;
