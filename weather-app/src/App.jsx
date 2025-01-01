import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");

  return (
    <div className="h-screen flex flex-col justify-start items-center bg-gray-100 pt-16">
      <SearchBar setWeatherData={setWeatherData} setLocation={setLocation} />
      {weatherData && <WeatherDisplay weatherData={weatherData} location={location} />}
    </div>
  );
}

export default App;
