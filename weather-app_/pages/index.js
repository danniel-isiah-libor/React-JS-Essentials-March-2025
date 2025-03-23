import { useState } from 'react';
import { Container, Typography, TextField, Box, Button } from '@shadcn/ui';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
  const [city, setCity] = useState('New York');
  const [cityInput, setCityInput] = useState('');

  const handleCityChange = () => {
    if (cityInput.trim() !== '') {
      setCity(cityInput);
    }
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="4rem">
        <Typography variant="h4" gutterBottom>
          Weather App
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center" marginBottom="2rem">
          <TextField
            label="Enter City"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button onClick={handleCityChange} variant="contained" color="primary">
            Search
          </Button>
        </Box>
        <WeatherCard city={city} />
      </Box>
    </Container>
  );
};

export default Home;
