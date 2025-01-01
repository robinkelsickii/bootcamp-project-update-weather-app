import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export default function SearchBar({ setWeatherData }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!input) return;

    try {
      let url;

      if (/\d{5}/.test(input)) {
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${apiKey}&units=metric`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
      }

      const res = await axios.get(url);
      setWeatherData(res.data); // Pass the fetched data to the parent
      setError("");
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-start pt-10">
      <div className="relative w-80">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          placeholder="City Name or Zipcode..."
          className="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700"
            onClick={handleSearch}
          >
            <span className="sr-only">Search</span>
            <CiSearch />
          </button>
        </span>
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}
