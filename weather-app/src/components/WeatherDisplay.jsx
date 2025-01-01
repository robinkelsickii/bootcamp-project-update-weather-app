export default function WeatherDisplay({ weatherData }) {
    if (!weatherData) {
      return null; // Render nothing if no data is passed
    }
  
    const { name, main, weather, wind } = weatherData;
  
    return (
      <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-80">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 capitalize">{weather[0].description}</p>
        <p className="text-lg font-semibold">{main.temp}°C</p>
        <p className="text-sm text-gray-500">Feels like: {main.feels_like}°C</p>
        <p className="text-sm text-gray-500">Wind: {wind.speed} m/s</p>
      </div>
    );
  }
  