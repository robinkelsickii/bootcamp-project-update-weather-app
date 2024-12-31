import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative w-80">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          placeholder="City Name or Zipcode..."
          className="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <CiSearch />
          </button>
        </span>
      </div>
    </div>
  );
}
