function WeatherDisplay({ weatherData, location }) {
  const { sys, main, weather, wind } = weatherData;
  const temperature = main.temp;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const weatherDescription = weather[0].description;

  const cityStateCountry = location.split(',');

  let locationText = location;
  if (cityStateCountry.length === 3) {
    const [city, state, country] = cityStateCountry;
    locationText = `${city}, ${state}, ${country}`;
  } else {
    locationText = `${location}, ${sys.country}`;
  }

  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-md mt-6">
      <h4 className="text-xl font-semibold">{locationText}</h4>
      <p className="text-lg">{weatherDescription}</p>
      <div className="mt-4">
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
