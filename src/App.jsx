import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const API_KEY = "6557810176c36fac5f0db536711a6c52"; // Replace with your actual API key
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      if (data.cod === 200) {
        setWeather(data); // Set weather data if the response is successful
      } else {
        console.error("Error:", data.message);
        setWeather(null); // Clear weather data if there's an error
      }
    } catch (error) {
      console.error("Error fetching the weather data: ", error);
      setWeather(null);
    }
  };
  return (
    <div className="MainDiv">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;
