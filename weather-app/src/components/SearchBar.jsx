import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;


function SearchBar() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!input) return;

    try {
      let url;

      // Check if the input is a valid zip code (5 digits)
      if (/\d{5}/.test(input)) {
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${apiKey}&units=metric`;
      } else {
        // Otherwise, treat it as city, state format
        url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
      }

      const res = await axios.get(url);

      console.log(res.data); // Log the weather data

      setError(""); // Reset any previous error messages
    } catch (err) {
      // If there's an error, set the error state
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
          onChange={(e) => setInput(e.target.value)} // Handle input change
        />

        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700"
            onClick={handleSearch} // Handle search button click
          >
            <span className="sr-only">Search</span>
            <CiSearch />
          </button>
        </span>
      </div>
      {/* Display error message if there was an issue fetching the data */}
      {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
    </div>
  );
}

export default SearchBar;
