"use client";

import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06f6ee75c0f700d455f092f6e09bae69
&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div className="weather-container bg-white p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Weather App</h1>
      <p className="text-2xl font-bold mb-3">By Subham</p>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        className="border border-gray-300 p-3 rounded-lg w-full mb-4 text-gray-700 focus:ring-2 focus:ring-blue-400"
        placeholder="Enter city name"
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition-colors"
      >
        {loading ? "Loading..." : "Get Weather"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
          <p className="text-lg text-gray-700">
            {weather.weather[0].description}
          </p>
          <p className="text-lg text-gray-700">{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
