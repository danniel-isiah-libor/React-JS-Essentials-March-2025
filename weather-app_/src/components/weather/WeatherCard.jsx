import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, Typography, Box, CircularProgress } from '@shadcn/ui';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=4e08b992e608c56b4ad1324b871bec82&q=Makati`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Card>
      <CardHeader title={`Weather in ${weatherData.name}, ${weatherData.sys.country}`} />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">Temperature: {weatherData.main.temp}°C</Typography>
          <Typography variant="body1">Humidity: {weatherData.main.humidity}%</Typography>
          <Typography variant="body1">Condition: {weatherData.weather[0].description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
