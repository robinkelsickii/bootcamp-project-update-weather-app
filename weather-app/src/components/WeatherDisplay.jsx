function WeatherDisplay({ weatherData, location }) {
  const { sys, main, weather = [{}], wind } = weatherData;
  const temperature = main?.temp || "N/A";
  const humidity = main?.humidity || "N/A";
  const windSpeed = wind?.speed || "N/A";
  const weatherDescription = weather[0]?.description || "Unknown weather";
  const icon = weather[0]?.icon || "01d";
  const farenheit = Math.round(temperature * (9 / 5) + 32);


  const cityStateCountry = location?.split(',') || [];
  const locationText = cityStateCountry.length === 3
    ? `${cityStateCountry[0]}, ${cityStateCountry[1]}, ${cityStateCountry[2]}`
    : `${location || "Unknown Location"}, ${sys?.country || ""}`;


  return (
    <div className="mt-16">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
      >
        <div className="sm:flex sm:justify-between sm:gap-4">
          {/* Location Text */}
          <div className="text-lg font-bold text-gray-900 sm:text-xl">
            {locationText}
          </div>

          {/* Weather Icon */}
          <div className="hidden sm:block sm:shrink-0">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={`Weather icon showing ${weatherDescription}`}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <p>{farenheit}°F</p>
          <p>{temperature}°C</p>
        </div>

      </a>
    </div>
  );
}

export default WeatherDisplay;
