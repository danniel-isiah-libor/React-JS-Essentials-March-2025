import axios from "axios";

function useWeather() {
  const http = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  const fetchWeather = async (search) => {
    const res = await http
      .get("/weather", {
        params: {
          q: search,
          units: "metric",
        },
      })
      .then((response) => response.data)
      .catch(() => null);

    return res;
  };

  const fetchForecast = async (search) => {
    const res = await http
      .get("/forecast", {
        params: {
          q: search,
          units: "metric",
        },
      })
      .then((response) => response.data)
      .catch(() => null);

    return res;
  };

  return {
    fetchWeather,
    fetchForecast,
  };
}

export default useWeather;